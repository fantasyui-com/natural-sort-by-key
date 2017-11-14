# natural-sort-by-key
Sort array of objects by natural, human, alphanumeric order. Natural sort order is an ordering of strings in alphabetical order, except that multi-digit numbers are ordered as a single character.

    $> npm i natural-sort-by-key

    const byKey = require('natural-sort-by-key');
    list.sort( byKey('flarp') )

Where list is an array of objects

    let list = [
      {flarp: '10 Baz'},
      {flarp: '100 Baz'},
      {flarp: '20 Baz'},
    ]

More at [Wikipedia](https://en.wikipedia.org/wiki/Natural_sort_order)
