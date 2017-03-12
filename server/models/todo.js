'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let db = require('../db')

let todoSchema = new Schema({
  title: String,
  content: String,
  complete: Boolean
}, {
  timestamps: true
})

let todo = mongoose.model('todo', todoSchema)

module.exports = todo
