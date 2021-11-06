const sqlite3 = require('sqlite3')
const Promise = require ('bluebird')
    
class AppDAO{
    constructor(dbFilePath){
        this.db = new sqlite3.Database(dbFilePath, (err) =>){
            if(err){
                console.log('Could not access Database')
            }
            else{
                console.log('Connected to Database')
            }
        }
    }
}