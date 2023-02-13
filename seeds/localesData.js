const {Locales} = require('../models')

const localesData = [
  {
    name: 'El Loro',
    type_id: 'Mexican',
    price: '$$-$$$',
    address: '1428 Yankee Doodle Rd, Eagan, MN 55121',
    description: 'They serve tasty mexican food.'
  },
  {
    name: 'Young Joni',
    type_id: 'Pizza',
    price: '$$',
    address: '165 13th Ave NE, Minneapolis, MN 55413',
    description: 'Gourmet fansy Pizza'
  },
  {
    name: 'Bravo Burritos',
    type_id: 'Mexican',
    price: '$',
    address: '68 33rd Ave S, St Cloud, MN 56301',
    description: 'Mission style burritos and other mexican foods.'
  },
  {
    name: 'Red Cow',
    type_id: 'American',
    price: '$$',
    address: '393 Selby Ave, St. Paul, MN 55102',
    description: 'Decent Burgers, good fries'
  }
]

const seedLocales = () => Locales.bulkCreate(localesData)

module.exports = seedLocales