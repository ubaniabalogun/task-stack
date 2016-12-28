// Setup Functions go here
import { globalShortcut } from 'electron'


/*
Register a hotkey
*/
export function registerHotkey(hotkey,hotkeyHandler, regFailureHandler ) {
  // TODO: Figure out how to implement error handling. Seems like it isn't working here
  let ret = false
  if ( globalShortcut.isRegistered(hotkey) ) {
    regFailureHandler()
  } else {
    ret = globalShortcut.register(hotkey, hotkeyHandler)  // TODO: Investigate how ret value can be used to validate that this actually worked
  }
  return ret
}

/*
Unregister all Hotkeys
*/
export function unregisterHotkeys(){
  globalShortcut.unregisterAll()
}
