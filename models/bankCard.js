const { LengthRequired } = require("http-errors");
const mongoose = require("mongoose");

const requiredString = {
  type: String,
  required: true,
} 

const BankCardSchema = new mongoose.Schema({
  name: requiredString,
  cardNumber: requiredString,
  holderName: requiredString,
  expiry: requiredString,
  cvv: requiredString,
  favourate: { type: Boolean, default: false},
});

const BankCard = mongoose.model("BankCard", BankCardSchema);
module.exports = BankCard;
