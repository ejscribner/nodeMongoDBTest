// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b08725777b842363f961db5')
    }, {
        $set: {completed: true}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //set name to my name
    //increment age by 1

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b083ef60ccc0abb54148ecd')
    }, {
        $set: {name: 'Elliot'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});