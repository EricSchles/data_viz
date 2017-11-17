(() => {
'use strict';

function buildGraph(response) {
  const cop = response.cop;
  const cops = response.cops;


  var chart = c3.generate({
      data: {
          x: 'x',
          columns: [
              ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
              // ['cop', 30, 200, 100, 400, 150, 250],
              // ['cops', 130, 340, 200, 500, 250, 350]
              cop,
              cops
          ]
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%Y-%m-%d'
              }
          }
      }
  });
}

function getArticles() {
  const resp = axios.get('http://localhost:5000/api')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // parse
  // return parsed response
}


buildGraph(getArticles());

})();

