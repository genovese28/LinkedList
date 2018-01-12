exports.setUpBodyParser = function(app, bodyParser) {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json({ type: "*/*" }));
};

exports.setUpHeaders = function(app) {
	app.use((request, response, next) => {
		response.header("Access-Control-Allow-Origin", "*");
		response.header(
			"Access-Control-Allow-Headers",
			"Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
		);
		response.header(
			"Access-Control-Allow-Methods",
			"POST,GET,PATCH,DELETE,OPTIONS"
		);
		response.header("Content-Type", "application/json");
		return next();
	});
};

exports.setUpMongoose = function(mongoose) {
	mongoose.Promise = Promise;
	mongoose.set("debug", true);
	mongoose
		.connect("mongodb://localhost/linkedList", {
			useMongoClient: true
		})
		.then(() => {
			console.log("Connected to MongoDB!");
		})
		.catch(err => {
			console.error(err);
		});
};
