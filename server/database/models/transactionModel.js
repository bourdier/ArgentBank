const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    userId: String,
    id: String,
    date: String,
    description: String,
    amount: Number,
    balance: Number,
    type: String,
    category: {
      type: String,
      enum: ['Electronic', 'Food', 'Rent', 'Transportation', 'Clothing', 'Health', 'Education', 'Entertainment', 'Other']
    },
    note: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('Transaction', transactionSchema)