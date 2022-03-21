#! /usr/bin/env node

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})

// readFile gives us back the contents of a file. We are passing in 3 arguments...
// the file we want to read
// the way to encode that file
// a callback function