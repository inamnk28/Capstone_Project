
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {router, verifyAToken} =  require("./routes/routes.js");
const app = express();
// use express json
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use router
// app.use(Router);
app.use(router);
app.listen(5000, () => console.log('Server running at http://localhost:5000'));

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { router, verifyAToken } = require("./routes/routes.js");

// const app = express();

// Middleware
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Use the authentication token verification middleware
// app.use(verifyAToken);

// // Use your defined routes
// app.use(router);

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
