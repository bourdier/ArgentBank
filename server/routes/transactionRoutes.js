const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionController')
const tokenValidation = require('../middleware/tokenValidation')

router.get(
  '/transactions',
  tokenValidation.validateToken,
  transactionController.getTransactions
)

router.post(
  '/transactions',
  tokenValidation.validateToken,
  transactionController.postTransaction
)

router.put(
  '/transactions',
  tokenValidation.validateToken,
  transactionController.updateTransaction
)

module.exports = router