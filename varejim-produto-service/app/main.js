import { app } from "./config/server";
import { knex } from "./config/db";

console.log("starting db migrate...");
knex.migrate.latest().then((_) => {
  console.log("migrations done!");
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`app running at http://localhost:${port}`);
});
