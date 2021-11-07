/*
var fs = require('fs')

class htmlStream {

    constructor() {}

    readFiles (file) {
        return new Promise((resolve, reject) => {
          fs.readFile(file, (error, data) => {
              if(error) {
                  reject(error);
              } else {
                  resolve(data);
              }  
          });
        });
    }
    /*
    fileStream (file) {
        return new Promise((resolve, reject) => {
            stream = fs.createReadStream(file);
            stream.on('error', function(err) {
                console.log(err);
            });
            stream.on('open', function() {
                resolve(data);
            });
        });
    }
    streamToString (stream) {
        const chunks = [];
        return new Promise((resolve, reject) => {
          stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
          stream.on('error', (err) => reject(err));
          stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        })
    }

}

module.exports = htmlStream;
*/