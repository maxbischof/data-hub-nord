export const datasets = [
  {
    id: 1,
    name: 'Arbeitslosigkeit Kiel',
    description: 'Arbeitslosigkeit in Kiel absolut und relativ seit 2009.',
    url:
      'https://www.kiel.de/opendata/kiel_wirtschaft_arbeit_unterbeschaeftigung.csv',
    imageUrl:
      'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    keys: [],
    license: 'Datenlizenz Deutschland – Zero – Version 2.0',
    publisher: 'Landeshauptstadt Kiel',
    displayedAs: '',
    seperator: ';',
    removeColumns: ['Land', 'Stadt', 'Kategorie', 'Merkmal'],
    columnsOrder: ['Jahr', 'Unterbschäftigtenquote', 'Unterbschäftigte'],
  },
  // {
  //   id: 2,
  //   name: 'Badegewässer Messungen',
  //   description: 'Messungen der Badegewässerqualität in Schleswig Holstein.',
  //   url: 'http://efi2.schleswig-holstein.de/bg/opendata/v_proben_odata.csv',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1527694545342-6176693ca513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  //   keys: [
  //     'BADEGEWAESSERID',
  //     'MESSSTELLENNAME',
  //     'MESSSTELLENID',
  //     'UEBERWACHUNGSARTID',
  //     'UEBERWASCHUNGSARTTEXT',
  //     'GEWAESSERKATEGORIE',
  //     'KUESTENGEWAESSER',
  //     'PROBEID',
  //     'DATUMMESSUNG',
  //     'PROBENART',
  //     'ECOLI',
  //     'INTEST_ENTEROKOKKEN',
  //     'WASSERTEMP',
  //     'LUFTTEMP',
  //     'SICHTTIEFE',
  //     'BEMERKUNG',
  //   ],
  //   license: 'Datenlizenz Deutschland – Zero – Version 2.0',
  //   publisher: 'Landeshauptstadt Kiel',
  //   displayedAs: '',
  //   seperator: '|',
  // },
  {
    id: 3,
    name: 'Berufspendler Kiel',
    description: 'Ein- und Auspendler in Kiel zwischen 1994 - 2019.',
    url:
      'https://www.kiel.de/opendata/kiel_wirtschaft_arbeit_berufspendler.csv',
    imageUrl:
      'https://images.unsplash.com/photo-1555272916-ed856980065a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    keys: [],
    license: 'Datenlizenz Deutschland – Zero – Version 2.0',
    publisher: 'Landeshauptstadt Kiel',
    displayedAs: '',
    seperator: ';',
    removeColumns: ['Land', 'Stadt', 'Kategorie', 'Merkmal'],
  },
  {
    id: 4,
    name: 'Erwerbstätige Kiel',
    description:
      'Die Anzahl der Erwerbstätigen in der Landeshauptstadt Kiel als Zeitreihe',
    url:
      'https://www.kiel.de/opendata/kiel_wirtschaft_arbeit_erwerbstaetige.csv',
    imageUrl:
      'https://images.unsplash.com/photo-1530191601183-4de2969575ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    keys: [],
    license: 'Datenlizenz Deutschland – Zero – Version 2.0',
    publisher: 'Landeshauptstadt Kiel',
    displayedAs: '',
    seperator: ';',
    removeColumns: ['Land', 'Stadt', 'Kategorie', 'Merkmal'],
  },
  {
    id: 5,
    name: 'Flugbewegungen auf dem Flughafen Kiel',
    description:
      'Die Anzahl der Flugbewegungen auf dem Flughafen Kiel als Zeitreihe zwischen 1994 und 2019',
    url:
      'https://www.kiel.de/opendata/kiel_transport_verkehr_flughafen_flugbewegungen.csv',
    imageUrl:
      'https://images.unsplash.com/photo-1586063029643-fd87377743ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    keys: [],
    license: 'Datenlizenz Deutschland – Zero – Version 2.0',
    publisher: 'Landeshauptstadt Kiel',
    displayedAs: '',
    seperator: ';',
    removeColumns: ['Land', 'Stadt', 'Kategorie', 'Merkmal'],
  },
  {
    id: 6,
    name: 'Straßenverkehrsunfälle in Kiel',
    description:
      'Die Anzahl der Straßenverkehrsunfälle in der Landeshauptstadt Kiel als Zeitreihe zwischen 1989 und 2019',
    url:
      'https://www.kiel.de/opendata/kiel_gesetze_justiz_strassenverkehsunfaelle_verkehrstote_verletzte_fahrerflucht.csv',
    imageUrl:
      'https://images.unsplash.com/photo-1596578243261-9a9494315404?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    keys: [],
    license: 'Datenlizenz Deutschland – Zero – Version 2.0',
    publisher: 'Landeshauptstadt Kiel',
    displayedAs: '',
    seperator: ';',
    removeColumns: ['Land', 'Stadt', 'Kategorie', 'Merkmal', 'Thema'],
  },
  {
    id: 7,
    name: 'Gemeldete Straftaten in Kiel',
    description:
      'Die Anzahl der Gemeldete Straftaten in der Landeshauptstadt Kiel als Zeitreihe zwischen 1988 und 2019',
    url:
      'https://www.kiel.de/opendata/kiel_gesetze_justiz_gemeldete_straftaten.csv',
    imageUrl:
      'https://images.unsplash.com/photo-1560575193-c2c9e886aefe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    keys: [],
    license: 'Datenlizenz Deutschland – Zero – Version 2.0',
    publisher: 'Landeshauptstadt Kiel',
    displayedAs: '',
    seperator: ';',
    removeColumns: ['Land', 'Stadt', 'Kategorie', 'Merkmal', 'Thema'],
  },
  {
    id: 8,
    name: 'Windkraftanlagen - betriebene WKA pro Jahr in Schleswig-Holstein',
    description:
      'Die Aufstellung zeigt die Anzahl und die genehmigte Leistung der betriebenen Windkraftanlagen (WKA) in Schleswig-Holstein für die Jahre 2012 bis zum 10.06.2020. Es sind nur nach dem BImSchG genehmigungsbedürftige WKA berücksichtigt. Quelle: LLUR, Fachdatenbank LIS-A, Stand 10.06.2010.',
    url:
      'https://opendata.zitsh.de/data/llur72/opendata_WKA_inBetrieb_SH_20020610.csv',
    imageUrl:
      'https://images.unsplash.com/photo-1589726096666-8bb135284e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    keys: [],
    license: 'Datenlizenz Deutschland Namensnennung 2.0',
    publisher:
      'Landesamt für Landwirtschaft, Umwelt und ländliche Räume (LLUR)',
    displayedAs: '',
    seperator: '	',
    removeColumns: ['Land', 'Stadt', 'Kategorie', 'Merkmal', 'Thema'],
  },
]
