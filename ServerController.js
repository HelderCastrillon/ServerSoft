module.exports = { 

ConnectionController: function(StrQuery,res){

	
	//print
	console.log(StrQuery);
	
	//Connect Configuration 
	var pg = require("pg");
	
	var conString = "pg://postgres:desa4361@localhost:5432/AppDhis";

	pg.connect(conString, function(err, client, done) {
	
	

	var handleError = function(err,client) {
      // no error occurred, continue with the request
      if(!err) return false;

      // An error occurred, remove the client from the connection pool.
      // A truthy value passed to done will remove the connection from the pool
      // instead of simply returning it to be reused.
      // In this case, if we have successfully received a client (truthy)
      // then it will be removed from the pool.
      done(client);
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('An error occurred');
      return true;
    };

	var executeQuery=function(StrQuery,client){
		// get the total number of visits today (including the current visit)
    	  exeQuery=client.query(StrQuery, function(err, result) {
	        // handle an error from the query
    	    if(handleError(err,client)) return;
		       // return the client to the connection pool for other requests to reuse
        	done();
      });

    //Json 
    exeQuery.on("end", function (result) {
			switch (result.command)
			{

			case "SELECT": 
				// On end JSONify and write the results to console and to HTML output
				console.log(JSON.stringify(result.rows, null, "    "));
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write(JSON.stringify(result.rows) + "\n");
				res.end();
				break;
			case "INSERT":
				// On end JSONify and write the results to console and to HTML output
				console.log(result);
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write(JSON.stringify({"status":"SUCCESS","row":result.rowCount}) + "\n");
				res.end();
				break;
			}

		});
	}

	executeQuery(StrQuery,client);
});
}
///add method here

};

