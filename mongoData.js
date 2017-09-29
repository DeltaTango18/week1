var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://<dillon>:<test>@ds143542.mlab.com:43542/week1";

MongoClient.connect(url, function(err, db){
	if (err) throw err;
	console.log("Database created!");
	db.close();
});
