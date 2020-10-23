# arvelie

https://wiki.xxiivv.com/site/arvelie.html
https://wiki.xxiivv.com/site/time.html

## cli

npm i -g arvelie

> arvelie 01A10
2001-01-10
> arvelie 1901A10
1901-01-10
> arvelie 2001-01-10
01A10
> arvelie 1901-01-10
1901A10

## lib

npm i arvelie

const { fromArvelie, toArvelie } = require('arvelie')
fromArvelie('01A10')    // '2001-01-10'
toArvelie('2001-01-10') // '01A10'