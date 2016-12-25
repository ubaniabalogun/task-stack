import { app, BrowserWindow } from 'electron'
import React from 'react'
import path from 'path'
import url from 'url'

let win

function createWindow(){
  // Create BrowserWindow
  //win = new BrowserWindow({width: 600, height: 74, frame:false})
  win = new BrowserWindow({width: 800, height: 800})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open DevTools
  win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
}


app.on('ready',createWindow)

app.on('window-all-closed', () => {
  //if (process.platform !== 'darwin'){
    app.quit()
  //}
})

app.on('activate', () => {
  if (win === null){
    createWindow()
  }
})
