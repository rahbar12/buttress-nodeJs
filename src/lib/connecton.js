const mongoose = require("mongoose");
//  mongoose.set('debug', true);

mongoose.connect(`${process.env.URI}${process.env.DB_NAME}`,{
    
    useNewUrlParser:true,

    useUnifiedTopology: true 

}).then(()=>{
    console.log("connection successful")
}).catch(()=>{
    console.log("no connection")
})
