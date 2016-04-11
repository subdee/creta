'use strict';

import mongoose from 'mongoose';

var MenuSchema = new mongoose.Schema({
  name: String,
  items: Array
});

export default mongoose.model('Menu', MenuSchema);
