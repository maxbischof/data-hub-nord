const { filterProperties, sortProperties } = require('./dataWrangling')

test('filters properties of objects in array', () => {
  const testArray = [
    { jahr: 2019, äpfel: 1, birnen: 2 },
    { jahr: 2020, äpfel: 5, birnen: 1 },
  ]

  return expect(
    filterProperties({
      deleteProperties: ['jahr', 'äpfel'],
      objectsArray: testArray,
    })
  ).toEqual([{ birnen: 2 }, { birnen: 1 }])
})

test('sorts properties of objects in array', () => {
  const testArray = [
    { jahr: 2019, äpfel: 1, birnen: 2 },
    { jahr: 2020, äpfel: 5, birnen: 1 },
  ]

  return expect(
    sortProperties({
      objectsArray: testArray,
      order: ['birnen', 'äpfel', 'jahr'],
    })
  ).toEqual([
    { birnen: 2, äpfel: 1, jahr: 2019 },
    { birnen: 1, äpfel: 5, jahr: 2020 },
  ])
})
