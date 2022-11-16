const js = require('json-server');
const create = js.create();
const router = js.router("db.json");
const defaults = js.defaults();

create.use(defaults);
create.use(js.bodyParser);

create.use(router);

create.listen(3000,() => {console.log("Parábens, você é brabo!")});