const Joi = require('../node_modules/joi');
const expenses = require('../models/expenses');

const getExpenses = async (req, res) => {
  try {
    const response = await expenses.findAll();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getItemById = async (req, res) => {
  const id = parseInt(req.params.searchid, 10);
  try {
    const response = await expenses.findById(id);
    if (response.length === 1) {
      res.send(response[0]);
    } else {
      res.status(404).json('Not Found');
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getItemsByMonth = async (req, res) => {
  const month = parseInt(req.params.searchmonth, 10);
  try {
    const response = await expenses.findByMonth(month);
    if (response.length >= 1) {
      res.send(response);
    } else {
      res.status(404).json('Not Found');
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getItemsByShop = async (req, res) => {
  const shop = req.params.searchshop;
  try {
    const response = await expenses.findByShop(shop);
    if (response.length >= 1) {
      res.send(response);
    } else {
      res.status(404).json('Not Found');
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

// NOT WORKING: parameters given in localhost are not accesible here
const createItem = async (req, res) => {
  // Price not defined, since can be f.e. null
  const schema = Joi.object({
    item: Joi.string().min(1).required(),
    shop: Joi.string().min(1).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const item = {
    item: req.body.item,
    shop: req.body.shop,
    category: req.body.category,
    price: req.body.price,
    date: req.body.date,
  };

  try {
    const response = await expenses.save(item);
    if (response) {
      item.id = response.insertId;
      res.status(201).send(item);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

// NOT WORKING: parameters given in localhost are not accesible here
const updateItem = async (req, res) => {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
    item: Joi.string().min(2).required(),
    shop: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const item = {
    id: req.body.id,
    item: req.body.item,
    shop: req.body.shop,
    category: req.body.category,
    price: req.body.price,
    date: req.body.date,
  };
  try {
    const response = await expenses.updateById(item);
    if (response) {
      res.send(item);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const deleteItem = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result = await expenses.findById(id);
    if (result.length === 0) {
      res.status(404).send('Not Found');
      return;
    }

    const response = await expenses.deleteById(id);
    if (response.affectedRows === 1) {
      res.status(200).send('Item deleted');
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  createItem,
  deleteItem,
  getExpenses,
  getItemById,
  getItemsByMonth,
  getItemsByShop,
  updateItem,
};
