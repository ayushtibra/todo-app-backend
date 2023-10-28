const ToDoModel = require('../models/ToDoModels');

// get list of todos
module.exports.getTodo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
}

// save todos in mongoose database
module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;
    await ToDoModel.create({ text: text }).then((data) => {
        console.log('added succesfully');
        console.log(data);
        res.send(data);
    })
}

// update a todo
module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body
    await ToDoModel.findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send('updated succesfully'))
        .catch((err) => console.log(err))
}

// delete a todo
module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body
    await ToDoModel.findByIdAndDelete(_id)
        .then(() => res.set(201).send('deleted succesfully'))
        .catch((err) => console.log(err))
}