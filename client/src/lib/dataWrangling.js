export function filterProperties({ deleteProperties, objectsArray }) {
  return objectsArray.map((object) => {
    deleteProperties.map((property) => delete object[property])
    return object
  })
}
