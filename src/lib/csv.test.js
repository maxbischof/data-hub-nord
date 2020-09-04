const { fetchCSV, csvToObjectsArray } = require("./csv")
const { datasets } = require("../components/testDatasets")

const response = `Land;Stadt;Kategorie;Merkmal;Jahr;Unterbschäftigte;Unterbschäftigtenquote
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2009;18918;15,1
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2010;18414;14,4
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2011;18469;14,6
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2012;17565;13,5
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2013;17457;13,2
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2014;17468;13
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2015;17278;12,7
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2016;18633;13,5
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2017;17496;12,3
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2018;16608;11,5
de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2019;15453;10,8
`

test("fetch CSV from ODSH as string", () => {
  return fetchCSV({ path: datasets[0].url }).then((data) => {
    expect(data).toEqual(
      expect.stringContaining(`Land;Stadt;Kategorie;Merkmal;Jahr;Unterbschäftigte;Unterbschäftigtenquote`)
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
        Merkmal: "Unterbeschäftigung",
        Stadt: "Kiel",
        "Unterbschäftigte": "18918",
        "Unterbschäftigtenquote": "15,1"
      },
    ])
  )
})