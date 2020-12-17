"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
console.log(electron_1.app);
function createWindow() {
    var window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile("public/index.html");
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
