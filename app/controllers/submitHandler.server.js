'use strict';
const fs = require('fs');
var path = process.cwd();

//var polls=require('../models/polls.js');

function submitHandler(){

this.displayForm=function displayForm(res) {
    fs.readFile(path + '/public/newpoll.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
  }

}

module.exports = submitHandler;
