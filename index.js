const express = require("express");
const app=express();
const route = require("./router")

app.use(route);

app.listen(4000, ()=>{
    console.log("4000 server start");
})