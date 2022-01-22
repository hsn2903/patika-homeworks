const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/index") {
    res.write("<h2>Anasayfaya Hoşgeldiniz!</h2>");
    res.end();
  } else if (url === "/hakkimda") {
    res.write("<h2>Hakkımda Sayfasına Hoşgeldiniz!</h2>");
    res.end();
  } else if (url === "/iletisim") {
    res.write("<h2>İletişim Sayfasına Hoşgeldiniz!</h2>");
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
