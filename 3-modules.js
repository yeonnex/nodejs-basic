// Modules
// CommonJS, every file is module (by default)
// Modules = Encapsulated Code (only share minimum)
// always x 3, your module have to start with dot
// sometimes your modules will be 2 levels up or whatever, then of course you'll stasrt with dot dot..
// because there's also going to be a thrid party modules and gonna ne built-in modules in node.
// and then USE just quotation mark

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mine-grenade')

