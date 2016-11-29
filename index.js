const express = require("express");
const expressGit = require("express-git");
const ejs = require('ejs');
const app = express();


app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.render('index');
})

app.use("/git", expressGit.serve("git-repo", {
	    auto_init: true,
	    serve_static: true,
	    authorize: function (service, req, next) {
	        // Authorize a service 
	        next();
	    }
	})
);
 
app.on('post-receive', function (repo, changes) {
    // Do something after a push 
    next();
});
 
app.listen(80);
