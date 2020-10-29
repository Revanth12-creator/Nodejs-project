//importing mongodb driver like in jdbc driver
let mongodb=require("mongodb").MongoClient;
// console.log(mongodb);

//now generating mangodb atlas url (cloud)
let Cloud_Database="mongodb+srv://Revanth:Revanth@143@cluster0.pbw66.mongodb.net/Revanth?retryWrites=true&w=majority";

//connecting to mongodb
mongodb.connect(Cloud_Database, { useUnifiedTopology: true } ,(err ,db) => {
    if(err) throw err;
    console.log("succesfully connected mogodb Altlas");

    //creating users
    let userDetails=[
        {
            name:"Revanth",
            age:22,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"Kuamr",
            age:21,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"sathis",
            age:32,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"garu",
            age:24,
            company:"MNC",
            location:"banglure",
        },
        {
            name:"shambha",
            age:30,
            company:"MNC",
            location:"banglure",
        },
    ];

    //creating database name
    let dbname=db.db("MERNsTACK_USERS");

    //inserting details into {MERNsTACK_USERS}
    dbname.collection("Uers").insertMany(userDetails,(err)=> {
       if(err) throw err;
       console.log('successfully data inserted into mongodb Atlas')
    })

})