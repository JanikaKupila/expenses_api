const connection = require('../db/connection');

const expenses = {
  findAll: () => new Promise((resolve, reject) => {
    connection.query('SELECT * FROM expenses;', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  findById: (id) => new Promise((resolve, reject) => {
    const selectQuery = 'SELECT * FROM expenses WHERE id=?;';
    connection.query(selectQuery, id, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  findByMonth: (month) => new Promise((resolve, reject) => {
    const selectQuery = 'SELECT * FROM expenses WHERE MONTH(date)=?;';
    connection.query(selectQuery, month, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  findByShop: (shop) => new Promise((resolve, reject) => {
    const selectQuery = 'SELECT * FROM expenses WHERE shop=?;';
    connection.query(selectQuery, shop, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  save: (item) => new Promise((resolve, reject) => {
    connection.query('INSERT INTO cities SET ?', item, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  deleteById: (id) => new Promise((resolve, reject) => {
    const deleteQuery = 'DELETE FROM expenses WHERE id=?;';
    connection.query(deleteQuery, id, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  // Replaced "item" with "i" to shorten connection.query
  updateById: (i) => new Promise((resolve, reject) => {
    // Category not added: on todo when updateById is working
    const updateQuery = 'UPDATE expenses SET item = ?, shop = ?, price = ?, date=? WHERE id = ?;';
    connection.query(updateQuery, [i.name, i.shop, i.price, i.date, i.id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
};

module.exports = expenses;
