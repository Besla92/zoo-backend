var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://swqgfuur:ka0JHQH7SX40VxRubu8pvC_JPA7AxY5C@tyke.db.elephantsql.com/swqgfuur" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM "Animals"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    console
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});