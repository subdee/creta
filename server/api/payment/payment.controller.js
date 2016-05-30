'use strict';

import Order from "./order.model";

var token = '316778af877cf80833110eb638b442dd9d259966';
var serviceId = 'SL-2693-0670';
var Paynl = require('nodejs-paynl'), pay;

pay = new Paynl({
  accountId: 402484,
  token: token
});

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
  pay.invoke('Transaction/getBanks/v2', {}).then(
    respondWithResult(res, 200)
  ).catch(
    handleError(res)
  );
}

// Creates a new payment
export function create(req, res) {
  var order = saveOrder(req.body);
  var amt = parseInt(order.amount * 100);
  pay.invoke('Transaction/start/v3', {
    token: token,
    serviceId: serviceId,
    amount: amt,
    paymentOptionId: 10,
    paymentOptionSubId: order.bank,
    finishUrl: 'http://creta-subdee.rhcloud.com/thankyou'
  }).then(
    respondWithResult(res, 200, order)
  ).catch(
    handleError(res)
  );
}

// Checks a payment
export function check(req, res) {
  var orderId = req.params.orderId;
  pay.invoke('Transaction/info/v3', {
    token: token,
    transactionId: orderId
  }).then(
    respondWithResult(res, 200)
  ).catch(
    handleError(res)
  );
}

// Updates a payment in the DB
export function update(req, res) {
  var orderId = req.params.orderId;
  var order = Order.update(
    {transactionId: orderId},
    {$set: {completed: true}}
  ).then(
    respondWithResult(res, 200)
  ).catch(
    handleError(res)
  );
}

function saveOrder(payment) {
  var order = new Order({
    name: payment.name,
    phone: payment.phone,
    street: payment.street,
    houseNumber: payment.houseNumber,
    city: payment.city,
    postcode: payment.postcode,
    amount: payment.amount,
    remarks: payment.remarks,
    deliveryTime: payment.deliveryTime,
    bank: payment.bank,
    transactionId: '',
    orderDate: Date.now(),
    completed: false
  });
  order.save(function (err) {
    if (err) {
      handleError(err);
    }
  });
  return order;
}
