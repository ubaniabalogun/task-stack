import path from 'path'
import Electron from 'electron'
import Datastore from 'nedb'

const app = ( process.type === "browser" ? Electron.app : Electron.remote.app)

const DB_NAME = 'quicklydo.db'
const DB_PATH = path.join(app.getPath('appData'),DB_NAME)
console.log(DB_PATH)


class Db {
  constructor(){
    this.db = new Datastore({
      filename: DB_PATH,
      autoload: true,
      timestampData: true
    })
  }

  addEntry(entry){
    var data = {
      entry,
      done: false
    }
    this.db.insert(data)
  }
}


export let tasklist = new Db()
