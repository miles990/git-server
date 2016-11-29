var express = require("express");
var expressGit = require("express-git");
var app = express();
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
