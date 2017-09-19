const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => console.log(result.result));

Todo.findOneAndRemove({text: 'Something todo'}).then((todo) => console.log(todo));

// Todo.findByIdAndRemove('59c0d7b63ea6d4b872f92813').then((todo) => console.log(todo));
