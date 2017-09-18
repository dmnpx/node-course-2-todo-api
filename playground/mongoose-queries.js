const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '59bfdc207c6f2a4027351b4b';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => console.log('Todos: ', todos));

Todo.findOne({
  _id: id
}).then((todo) => {
  if(!todo) {
    return console.log('Id not found.');
  }

  console.log('Todo: ', todo)
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found.');
  }

  console.log('Todo: ', todo)
}).catch((e) => console.log(e));*/

// query Users by ID
var id = '59bfc33c61f24b3442b0542b';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User was not found.');
  }

  console.log('User :', user);
}).catch((e) => console.log(e));
