const Koa = require("koa");
const app = new Koa();

// response

app.use(function* (next) {
  // skip the rest of the code if the route does not match
  if (this.request.path !== "/index") return yield next;

  this.response.body = "Anasayfa!";
});

app.use(function* (next) {
  // skip the rest of the code if the route does not match
  if (this.request.path !== "/hakkimda") return yield next;

  this.response.body = "Hakkımda sayfası!";
});

app.use(function* (next) {
  // skip the rest of the code if the route does not match
  if (this.request.path !== "/iletisim") return yield next;

  this.response.body = "İletişim Sayfası!";
});

app.listen(5000);
