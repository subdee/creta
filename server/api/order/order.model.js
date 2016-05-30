'use strict';

import mongoose from 'mongoose';

var OrderSchema = new mongoose.Schema({
  items: [{
    qty: Number,
    item: {
      description: String,
      name: String,
      price: Number
    }
  }],
  name: String,
  phone: String,
  street: String,
  houseNumber: String,
  city: String,
  postcode: String,
  amount: Number,
  remarks: String,
  deliveryTime: String,
  bank: Number,
  transactionId: String,
  orderDate: Number,
  completed: Boolean
});

export default mongoose.model('Order', OrderSchema);
