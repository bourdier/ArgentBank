const transactionService = require('../services/transactionService')

module.exports.postTransaction = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await transactionService.postTransaction(req)
    response.status = 200
    response.message = 'Successfully posted transaction'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in postTransaction - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.updateTransaction = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await transactionService.updateTransaction(req)
    response.status = 200
    response.message = 'Successfully updated transaction'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateTransaction - userController.js')
    response.status = 400
    response.message = error.message
  }
}

module.exports.getTransactions = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await transactionService.getTransactions(req)
    response.status = 200
    response.message = 'Successfully got transactions'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in getTransactions - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}