"use strict"
const fs = require("fs");
const txtPath = "./txts/1.txt";
let wf = fs.createWriteStream(txtPath);
wf.on("data", (d) => {
    console.log(d);
})
wf.on("end", () => {
    console.log("end");
})
wf.write("welcome\n");
wf.write("aaaa");
wf.end();