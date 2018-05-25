// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany --> target many docs
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne --> Delete one document
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })
    
    //findOneAndDelete --> returns and then deletes
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name: 'Elliot'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b083face1418bbb71df2b7a')
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});