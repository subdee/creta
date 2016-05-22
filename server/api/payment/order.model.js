'use strict';

import mongoose from 'mongoose';

var OrderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  street: String,
  houseNumber: String,
  city: String,
  postcode: String,
  amount: Number,
  bank: Number,
  transactionId: String,
  orderDate: Number,
  completed: Boolean
});

export default mongoose.model('Order', OrderSchema);
