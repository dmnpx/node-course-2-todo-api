const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server.');
  }

  console.log('Connected to mongodb server.');

  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("59bf9fb93ad4cf5be626e018")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b7fa64d36bce1b6844f432')
  }, {
    $set: {
      name: 'Damien'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();mongodb-delete.js
});
