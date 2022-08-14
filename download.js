const express = require ("express");

const app = express();

app.get("/",(req,res)=>{
        
        // res.send("hi");
        res.sendFile(__dirname+"/download.html");

});

app.get("/download/:filename",(req,res)=>{
//     res.send("hi");
//     console.log(req.params.filename);
    const fname = req.params.filename.slice(1);
//     console.log(fname);
   const filepath = __dirname + "/resource/"+fname+".png";
//    console.log(filepath);
   res.download(
        filepath,
        "downloaded-enemyship.png",
        (err)=>{
             res.send({
                   error:err,
                    msg:"Problem downloding the file"
             });
        });
    
    
});


app.listen(3000,()=>{console.log("app started ....")});