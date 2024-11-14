// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Create
 *
 * @summary call operation Create
 */
async function usersCreateSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const result = await client
    .path("/users")
    .post({
      body: {
        username: "{Your username}",
        email: "{Your email}",
        password: "{Your password}",
        validated: true,
      },
    });
  console.log(result);
}

async function main() {
  usersCreateSample();
}

main().catch(console.error);
