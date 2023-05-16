const path = require('path');
const {app, BrowserWindow, Menu} = require('electron');


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

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});