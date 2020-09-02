const express=require('express')
let app=express()
 
app.use(express.static(__dirname+ '/public'));
 
// Start the server on port 3000 //

app.listen(3000)