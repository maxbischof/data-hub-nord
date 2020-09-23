# data-hub-nord

This app aims to make datasets from [Open Data Schleswig Holstein](https://opendata.schleswig-holstein.de/) accessible through displaying data as tables, maps and diagrams.

[Scrum Board](https://github.com/maxbischof/data-hub-nord/projects/2) for Project

[Live Demo](https://datahubnord.herokuapp.com/)
## Set up
Define Env-Variables: 

`GOOGLE_GEOCODE_KEY` references google api key for geocoding addresses. 

`NODE_OPTIONS = --max_old_space_size=512` If deployed on a heroku hobby dyno nodes memory must be limited.
