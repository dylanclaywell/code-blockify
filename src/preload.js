const { contextBridge, ipcRenderer, remote } = require('electron')

contextBridge.exposeInMainWorld('ipcRenderer', {
  closeWindow: () => {
    ipcRenderer.send('close-window')
  },
})
