function fromArvelie(input) {
  let year
  let inputWithoutYear

  if (input.length === 5) {
    year = parseInt('20' + input.slice(0, 2), 10)
    inputWithoutYear = input.slice(2)
  } else if (input.length === 7) {
    year = parseInt(input.slice(0, 4), 10)
    inputWithoutYear = input.slice(4)
  }

  if (!year || year === NaN) {
    throw Error(`Wrong input`)
  }

  if (inputWithoutYear === '+01') {
    return `${year}-12-31`
  }
  if (inputWithoutYear === '+02') {
    return `${year}-02-29`
  }

  const arvelieMonth = fromArvelieMonth(inputWithoutYear[0])

  const arvelieDays = parseInt(inputWithoutYear.slice(1), 10)
  if (arvelieDays === NaN) {
    throw Error(`Wrong input`)
  }

  const days = arvelieMonth * 14 + arvelieDays

  const d = new Date(`${year}-01-01`)
  d.setDate(days)
  return d.toISOString().split('T')[0]
}

function toArvelie(input) {
  /**
   * initiate date with timezone so it's not yesterday
   */
  const date = new Date(input + 'T00:00')

  const days = daysIntoYear(date)

  const fullYearStr = date.getFullYear().toString()
  const y =
    fullYearStr.slice(0, 2) === '20' ? fullYearStr.slice(2) : fullYearStr

  if (date.getMonth() + 1 === 12 && date.getDate() === 31) {
    return y + '+01'
  }

  if (isLeapYear(y) && date.getMonth() + 1 === 2 && date.getDate() === 29) {
    return y + '+02'
  }

  const m = String.fromCharCode(65 + Math.floor(days / 14))
  const d = days % 14 < 10 ? '0' + (days % 14) : `${days % 14}`

  return y + m + d
}

const CHARCODE_A = 65
function fromArvelieMonth(char) {
  return char.charCodeAt(0) - CHARCODE_A
}

function daysIntoYear(date) {
  const msDiff =
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
    Date.UTC(date.getFullYear(), 0, 0)
  const msPerDay = 24 * 60 * 60 * 1000

  return msDiff / msPerDay
}

function isLeapYear(year) {
  return new Date(year, 1, 29).getDate() === 29
}

module.exports = {
  fromArvelie,
  toArvelie
}
