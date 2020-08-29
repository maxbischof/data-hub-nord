const { fetchCSV, csvToObjectsArray } = require("./utils")
const { datasets } = require("./settings.js")

const response = `Land;Stadt;Kategorie;Merkmal;Jahr;Unterbsch�ftigte;Unterbsch�ftigtenquote
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2009;18918;15,1
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2010;18414;14,4
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2011;18469;14,6
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2012;17565;13,5
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2013;17457;13,2
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2014;17468;13
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2015;17278;12,7
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2016;18633;13,5
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2017;17496;12,3
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2018;16608;11,5
de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2019;15453;10,8
`

test("fetch CSV from ODSH as string", () => {
  return fetchCSV({ path: datasets[0].url }).then((data) => {
    expect(data).toEqual(
      expect.stringContaining(`Land;Stadt;Kategorie;Merkmal;Jahr;Unterbsch�ftigte;Unterbsch�ftigtenquote`)
    )
  })
})

test("returns array of objects from csv text", () => {
  return expect(
    csvToObjectsArray({
      csv: response,
      columnNames: datasets[0].keys,
      seperator: ";",
    })
  ).toEqual(
    expect.arrayContaining([
      {
        Jahr: "2009",
        Kategorie: "wirtschaft_arbeit",
        Land: "de-sh",
        Merkmal: "Unterbesch�ftigung",
        Stadt: "Kiel",
        "Unterbsch�ftigte": "18918",
        "Unterbsch�ftigtenquote": "15,1"
      },
    ])
  )
})