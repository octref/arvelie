#!/usr/bin/env node

const dateInput = process.argv[2]
const { fromArvelie, toArvelie } = require('./lib')

if (!dateInput) {
  process.stdout.write(`$ arvelie 01A10\n> 2001-01-10\n`)
  process.stdout.write(`\n`)
  process.stdout.write(`$ arvelie 2001-01-10\n> 01A10\n`)
  process.exit(0)
}

if (dateInput.length === 5 || dateInput.length === 7) {
  process.stdout.write(fromArvelie(dateInput) + '\n')
  process.exit(0)
} else if (dateInput.length === 10) {
  process.stdout.write(toArvelie(dateInput) + '\n')
  process.exit(0)
} else {
  throw Error(`Wrong input`)
}
