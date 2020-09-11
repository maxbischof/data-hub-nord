export function filterProperties({ deleteProperties, objectsArray }) {
  return objectsArray.map((object) => {
    deleteProperties.map((property) => delete object[property])
    return object
  })
}

export function sortProperties({ objectsArray, order }) {
  const sortedPropertiesObjects = objectsArray.map((object) => {
    const objectArray = Object.entries(object)
    const orderedObjectArray = []

    order.forEach((order) => {
      objectArray.forEach((object) => {
        if (order.replace(/\s+/g, '') === object[0].replace(/\s+/g, '')) {
          orderedObjectArray.push(object)
        }
      })
    })

    const orderedObject = {}
    orderedObjectArray.forEach((item) => {
      orderedObject[item[0]] = item[1]
    })

    return orderedObject
  })

  return sortedPropertiesObjects
}
