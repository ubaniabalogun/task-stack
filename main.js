import { app, Tray, Menu } from 'electron'
import React from 'react'
import path from 'path'
import { windowConfig, shortcuts, trayTemplate } from './app/config/constants'
import { registerHotkey, unregisterHotkeys } from './app/utils/setup'
import { EntryWindowManager } from './app/utils/window'

let ewManager
let tray

const indexPath = path.join(__dirname,'app/index.html')
const trayIcon = path.join(__dirname,'app/static/trayIcon.png')

app.on('ready',() => {
  app.dock.hide()
  ewManager = new EntryWindowManager(windowConfig,indexPath)
  //ewManager.win.webContents.openDevTools({mode:'undocked'})
  ewManager.win.once('ready-to-show', () => {
    try {
      // TODO: Figure if currying the handlers is the approriate way to grant them access to the global `win` variable
      registerHotkey(shortcuts.entryViewHotkey, () => ewManager.handleEntryViewHotkey(), () => ewManager.handleEntryViewHotkeyRegFailure())
    } catch (error) {
      ewManager.handleEntryViewHotkeyRegFailure()
    }
  })

  tray = new Tray(trayIcon)
  const contextMenu = Menu.buildFromTemplate(trayTemplate)
  tray.setToolTip('TaskStack')
  tray.setContextMenu(contextMenu)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', () => {
  if (!ewManager.win) {
    ewManager = new EntryWindowManager(windowConfig,indexPath)
  }
})

app.on('will-quit', () => {
  //NOTE: Don't know how necessary this is
  unregisterHotkeys()
})
