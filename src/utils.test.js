const { fetchCSV } = require("./utils")
const { datasets } = require("./settings.js")

test("returns CSV from ODSH as string", () => {
  return fetchCSV({ targetURL: datasets[0].url }).then((data) => {
    expect(data).toEqual(
      expect.stringContaining("Land;Stadt;Kategorie;Merkmal;Jahr;"),
    )
  })
})