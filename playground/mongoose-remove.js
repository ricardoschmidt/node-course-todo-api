const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5bedc5363639b9e95386199d'}).then((todo) => {
//
// });

// Todo.findByIdAndRemove('5bedc5363639b9e95386199d').then((todfo) => {
//   console.log(todo);
// });
