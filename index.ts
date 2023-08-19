import { Application, Context, Router } from "oak";
import contactsRouter from "./src/routes/contacts/index.ts";

const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.redirect("/contacts");
});

router.use(
  "/contacts",
  contactsRouter.routes(),
  contactsRouter.allowedMethods()
);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
