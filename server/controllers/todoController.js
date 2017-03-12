'use strict'
const express = require('express')
const todo = require('../models/todo')

let addTodo = (req, res, next) => {
  todo.create(req.body).then((todo) => {
    res.send(todo)
  }).catch((e) => {
    if (e) throw e
  })
}

let getTodo = (req, res, next) => {
  todo.find({}).then((todos) => {
    !todo ? res.send('Todo isEmpty!') : res.send(todos)
  }).catch((e) => {
    if (e) throw e
  })
}

let editTodo = (req, res, next) => {
  todo.findById(req.params.id).then((todo) => {
    if (!todo) {
      res.send('Todo is not found')
    } else {
      todo.update(req.body).then((result) => {
        res.send(result)
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

let removeTodo = (req, res, next) => {
  todo.findById(req.params.id).then((todo) => {
    if (!todo) {
      res.send('Todo is not found')
    } else {
      todo.remove(req.params.id).then((result) => {
        res.send(result)
      }).catch((e) => {
        if (e) throw e
      })
    }
  }).catch((e) => {
    if (e) throw e
  })
}

let complete = (req, res, next) => {
  todo.findOneAndUpdate({
    _id: req.params.id
  }, {
    complete: true
  }, {
    new: true
  }).then((todo) => {
    res.send(todo)
  }).catch((e) => {
    if (e) throw e
  })
}

let uncomplete = (req, res, next) => {
  todo.findOneAndUpdate({
    _id: req.params.id
  }, {
    complete: false
  }, {
    new: true
  }).then((todo) => {
    res.send(todo)
  }).catch((e) => {
    if (e) throw e
  })
}

module.exports = {
  addTodo,
  getTodo,
  editTodo,
  removeTodo,
  complete,
  uncomplete
}
