const path = require('path');
const {app, BrowserWindow, Menu} = require('electron');
const { spawn } = require('child_process');
const kill = require('tree-kill');
const apiExePath = path.join(__dirname, './api.exe');
const apiProcess = spawn(apiExePath);


apiProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

apiProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

apiProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

const isMac = process.platform === 'darwin';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Password Generator',
        width: 600,
        height: 400,
    });

    mainWindow.loadFile(path.join(__dirname, './src/index.html'));
    // Remove the menu bar
    Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});
let isQuitting = false;
app.on('before-quit', (event) => {
    if (isQuitting) return;

    // Prevent the default behavior
    event.preventDefault();

    isQuitting = true;

    // Kill the apiProcess and its child processes
    kill(apiProcess.pid, 'SIGTERM', function(err) {
        if (err) {
            console.log("Failed to kill process tree: " + err.message);
            return;
        }
    // Now it's safe to quit the app
    setImmediate(() => app.quit());
});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});
});
