const express = require("express");
const path = require("path");

const app = express();
const PORT = 9090;

app.use('/test', express.static(path.join(__dirname, 'SpecRunner.html', "lib/jasmine-2.0.0")))


app.listen(PORT, () => {
  console.log(`Servidor en escucha en: http://127.0.0.1:${PORT}`);
});
