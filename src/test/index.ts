
import { test } from "ava";
import { main } from "..";

test(`main`, async (t) => {
  await main();
  t.pass();
});
