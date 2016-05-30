'use strict';

import Order from "./order.model";

function respondWithResult(res, statusCode, order = null) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      if (order) {
        order.transactionId = entity.transaction.transactionId;
        order.save();
      }
      res.status(statusCode).json(entity);
    }
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

export function index(req, res) {
  Order.find({completed: true}).then(
    respondWithResult(res, 200)
  ).catch(
    handleError(res)
  );
}
