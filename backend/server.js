import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl ='mongodb://localhost/crudwithredux';
mongodb.MongoClient.connect(dbUrl,function(err, db){
    app.get('/api/games', (req,res)=>{
        db('crudwithredux').collection('games').find({}).toArray((err, games)=>{
            res.json({ games });
        });
    });
    app.listen(8080, ()=>console.log('server is running on localhost:8080'));
})

