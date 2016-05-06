'use strict';

var Paynl = require('paynl'), pay;

pay = new Paynl({
  tokenId : 'SL-2693-0670',
  accountId: 402484,
  token   : '316778af877cf80833110eb638b442dd9d259966'
});

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

export function index() {
  pay.invoke('Session/getPaymentOptions/v2', {
    programId : 30217,
    websiteId : 2
  }).then(function(response) {
    respondWithResult(response, 200);
  }, function(error) {
    handleError(error);
  })
}

// Creates a new payment
export function create(req, res) {
  pay.invoke('Session/create/v2', {
    programId: 30217,
    websiteId: 2,
    amount: req.get('amount')
  }).then(function (response) {
    respondWithResult(response, 200);
  }, function (error) {
    handleError(error);
  })
}

