const express = require("express");

const app = express();

app.use(
  express.static("../dist", {
    setHeaders: (res, path, stat) => {
      res.set("Cache-Control", "public, s-maxage=86400");
    },
  })
);
app.get("/*", (req, res) => res.redirect("/"));
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
