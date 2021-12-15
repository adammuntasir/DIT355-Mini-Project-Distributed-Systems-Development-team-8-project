import fetch from "node-fetch";
import fs from "fs-extra";

let url = 'https://api.npoint.io/80a0d24ef69feccef7d6'

fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log(out);
        //var parseJson = JSON.parse(out); // json parsed
        fs.writeFile('pushedJSON.json', JSON.stringify(out), function(err) {
            if (err) throw err;
        })
    })
    .catch(err => {
        throw err
    });