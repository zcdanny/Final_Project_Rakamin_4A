const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

app.use(express.json());

// Contoh rute:
app.get('/api/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  });
  
  
  // Atur port yang akan digunakan oleh server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
  });

module.exports = app;