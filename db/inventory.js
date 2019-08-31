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
    "code": "OHAA-2837-3627-37hg",
    "price": "2.00"
  },{
    "name": "Bulletproof Brain Octane MCT Oil",
    "code": "BBOM-O349-48aP-3im9",
    "price": "14.73"
  },{
    "name": "Yupik Organic Raw Cashews, 2lb Package",
    "code": "YURC-2P87-272h-Dbg1",
    "price": "22.98"
  }
];
