import { Handlebars, HandlebarsConfig } from "handlebars";
import { Context, Router } from "oak";

const DEFAULT_HANDLEBARS_CONFIG: HandlebarsConfig = {
  baseDir: "src/views/",
  extname: ".hbs",
  layoutsDir: "layouts/",
  partialsDir: "partials/",
  cachePartials: true,
  defaultLayout: "main",
  helpers: undefined,
  compilerOptions: undefined,
};

const handle = new Handlebars(DEFAULT_HANDLEBARS_CONFIG);

const router = new Router();

router.get("/", async (ctx: Context) => {
  ctx.response.body = await handle.renderView("contacts/list");
});

export default router;
