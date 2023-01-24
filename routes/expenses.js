const express = require('express');
const {
  createItem, getExpenses, getItemById, getItemsByMonth, getItemsByShop, updateItem, deleteItem,
} = require('../controllers/expenses');

const router = express.Router();

router.get('expenses/', getExpenses);
router.get('/id/:searchid', getItemById);
router.get('/month/:searchmonth', getItemsByMonth);
router.get('/shop/:searchshop', getItemsByShop);
router.post('/', createItem);
router.put('/', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
