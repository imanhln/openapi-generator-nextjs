import createClient from "openapi-fetch";
import type { paths } from "./v1";

const client = createClient<paths>({
  baseUrl: "https://petstore3.swagger.io/api/v3/",
});
export default client;
