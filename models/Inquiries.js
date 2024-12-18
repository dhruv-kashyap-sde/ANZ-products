const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the data
const InquirySchema = new Schema({
  date: {
    type: Date, // Consider using Date type for proper date handling
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Optional: ensures uniqueness of email
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Email validation
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format xxx-xxx-xxxx'],
  },
  message: {
    type: String,
    required: true,
    maxlength: 500, // Optional: limit message length
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true,
  },
});

// Export the model
module.exports = mongoose.model('Inquiry', InquirySchema);
