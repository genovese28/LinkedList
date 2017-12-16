// npm packages
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// app config
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); 


//app imports
const { usersRouter } = require("./routers");
// const { companiesRouter } = require("./routers");
// const { jobsRouter } = require("./routers");

app.get('/', (request, response, next) => {
  return response.redirect('/items');
});
app.use('/users', usersRouter);
// app.use('/companies', companiesRouter);
// app.use('/jobs', jobsRouter);

app.listen(3000, () => {
  console.log('Express Templating Server listening on port 3000');
});
