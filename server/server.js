var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: 'Finish Node Tutorial',

});

newTodo.save().then((doc) => {
  console.log('Saved Todo :', doc);
}, (e) => {
  console.log('Unable to save Todo.', e);
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'damien_16@hotmail.ch'
});

newUser.save().then((doc) => {
  console.log(doc);
}, (e) => {
  console.log('Unable to add user.', e);
});
