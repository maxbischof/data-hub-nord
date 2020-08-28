export const proxyURL = 'http://0.0.0.0:8080/'

export const datasets = [
  {
    name: "Arbeitslosigkeit Kiel",
    description: "Arbeitslosigkeit in Kiel absolut und relativ seit 2009",
    url:
      "https://www.kiel.de/opendata/kiel_wirtschaft_arbeit_unterbeschaeftigung.csv",
    imageUrl:
      "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    keys: "",
    license: "Datenlizenz Deutschland – Zero – Version 2.0",
    publisher: "Landeshauptstadt Kiel",
    displayedAs: "",
    seperator: ";"
  },
  {
    name: "Badegewässer Messungen ",
    description: "Messungen der Badegewässerqualität in Schleswig Holstein.",
    url:
      "http://efi2.schleswig-holstein.de/bg/opendata/v_proben_odata.csv",
    imageUrl:
      "https://images.unsplash.com/photo-1527694545342-6176693ca513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    keys: [
      'BADEGEWAESSERID',
      'MESSSTELLENNAME',
      'MESSSTELLENID',
      'UEBERWACHUNGSARTID',
      'UEBERWASCHUNGSARTTEXT',
      'GEWAESSERKATEGORIE',
      'KUESTENGEWAESSER',
      'PROBEID',
      'DATUMMESSUNG',
      'PROBENART',
      'ECOLI',
      'INTEST_ENTEROKOKKEN',
      'WASSERTEMP',
      'LUFTTEMP',
      'SICHTTIEFE',
      'BEMERKUNG'],
    license: "Datenlizenz Deutschland – Zero – Version 2.0",
    publisher: "Landeshauptstadt Kiel",
    displayedAs: "",
    seperator: "|"
  },
]