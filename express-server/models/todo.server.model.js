import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  todoText: String,
  todoDesc: String
});

export default mongoose.model('Todo', Schema);
