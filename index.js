const express = require("express");
const app = express();

const PORT = process.env.PORT || 8008;

app.get("/", (req, res) => {
  return res.json({
    message: "If you can see this, I have dirtied my hands in Docker",
  });
});

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
