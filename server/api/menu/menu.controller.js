/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/menus              ->  index
 */

'use strict';

import Menu from './menu.model';

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

export function index(req, res) {
  return Menu.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}
