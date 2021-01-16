import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

function createWindow() {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  })

  ipcMain.on('close-window', () => {
    window.close()
  })

  window.loadFile(path.resolve(__dirname, 'public/index.html'))
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
