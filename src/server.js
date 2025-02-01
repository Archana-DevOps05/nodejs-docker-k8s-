const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, Friends! This is  node.js code testing  using CI/CD pipeline.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

