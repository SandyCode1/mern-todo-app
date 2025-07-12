const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Text is required'], // Enhanced validation message
      trim: true, // Automatically removes whitespace
      minlength: [1, 'Text must be at least 1 character long']
    },
    completed: {
      type: Boolean,
      required: [true, 'Completed status is required'],
      default: false // Better to have a default value
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
    toJSON: { // Transform for JSON output
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

module.exports = mongoose.model('Todo', todoSchema); 