const Transaction = require('../database/models/transactionModel')

module.exports.postTransaction = async serviceData => {
  try {
    const newTransaction = new Transaction({
      userId: serviceData.body.userId,
      id: serviceData.body.id,
      date: serviceData.body.date,
      description: serviceData.body.description,
      amount: serviceData.body.amount,
      balance: serviceData.body.balance,
      type: serviceData.body.type,
      category: serviceData.body.category,
      note: serviceData.body.note
    })

    let result = await newTransaction.save()

    return result
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}

module.exports.updateTransaction = async serviceData => {
  try {
    const transaction = await Transaction.findOne({ _id: serviceData.body.id })

    if (!transaction) {
      throw new Error('Transaction not found!')
    }

    transaction.userId = serviceData.body.userId
    transaction.id = serviceData.body.id
    transaction.date = serviceData.body.date
    transaction.description = serviceData.body.description
    transaction.amount = serviceData.body.amount
    transaction.balance = serviceData.body.balance
    transaction.type = serviceData.body.type
    transaction.category = serviceData.body.category
    transaction.note = serviceData.body.note

    let result = await transaction.save()

    return result
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}

module.exports.getTransactions = async serviceData => {
  try {
    const transactions = await Transaction.find({ userId: serviceData.query.userId })

    if (!transactions) {
      throw new Error('Transactions not found!')
    }

    return transactions
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}