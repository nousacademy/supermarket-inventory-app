// The produce item database is only a single, in-memory array of data and supports the following operations: add, delete, and fetch
// The produce includes name, produce item code, and the unit price
// The produce item name is alphanumeric and case insensitive
// The produce codes are sixteen characters long, with dashes separating each four-character group
// The produce codes are alphanumeric and case insensitive
// The produce item’s unit price is a number with up to 2 decimal places
// Error handling (GET nonexistent produce, bad POST payload, etc.)

module.exports = [
  {
    "name": "Organic Honeycrisp Apples",
    "code": "OHA8283",
    "price": "2.00"
  },{
    "name": "Bulletproof Brain Octane MCT Oil",
    "code": "BBOMO934948",
    "price": "14.73"
  },{
    "name": "Yupik Organic Raw Cashews, 2lb Package",
    "code": "YURC2P387272",
    "price": "22.98"
  }
];
