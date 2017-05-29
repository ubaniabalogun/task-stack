/*
Utils for managing browser windows
*/
import { BrowserWindow } from 'electron'
import { WINDOW_Y_OFFSET, SHORTCUTS } from '../config/constants'
import { registerHotkey, unregisterHotkeys } from './setup'
import url from 'url'
import path from 'path'
/*
BrowserWindowManager base class
*/
export class BrowserWindowManager {

  constructor(windowConfig,pathname){
    this.win = new BrowserWindow(windowConfig)
    this.win.loadURL(url.format({
      pathname,
      protocol: 'file:',
      slashes: true
    }))
  }
}

/*
Window Manager for the main, hotkey-triggered data entry view
*/
export class EntryWindowManager extends BrowserWindowManager {

  constructor(windowConfig, pathname){
    super(windowConfig,pathname)
    let [x,y] = this.win.getPosition()
    y -= WINDOW_Y_OFFSET
    this.win.setPosition(x,y)
    this.setupEventListeners()
  }

  handleEntryViewHotkey(){
    if (this.win){
      this.win.isVisible() ? this.win.hide() : this.win.show()
      return true
    } else {
      console.log('handleEntryViewHotkey: No Window exists')
      return false
    }
  }

  handleEntryViewHotkeyRegFailure(){
    console.log('handleEntryViewHotkey: registration failed')
  }

  setupEventListeners(){
    if (!this.win){
      console.log('setupEventListeners: No window exists')
      return false
    }
    this.win.on('closed',() => this.win = null)
    this.win.on('blur', () => this.win.hide())
    this.win.once('ready-to-show', () => {
      try {
        const ret = registerHotkey(SHORTCUTS.ENTRYVIEWHOTKEY,() => this.handleEntryViewHotkey(), () => this.handleEntryViewHotkeyRegFailure())
      } catch (error) {
        this.handleEntryViewHotkeyRegFailure()
      }
    })
    return true
  }
}
