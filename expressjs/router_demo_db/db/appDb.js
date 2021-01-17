const MongoClient = require('mongodb').MongoClient;
const dbname = 'exp_db';
const db_url = 'mongodb://localhost:27017/';
var db = undefined;

MongoClient.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, con) =>{
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('connected');
    db = await con.db(dbname);
});

module.exports=db;