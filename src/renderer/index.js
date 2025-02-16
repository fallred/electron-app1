// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
import {ipcRenderer} from 'electron';

function invoke(type: any) {
  ipcRenderer.send('command', type)
}

ipcRenderer.invoke('hello').then(result => {
  console.log(result);
});