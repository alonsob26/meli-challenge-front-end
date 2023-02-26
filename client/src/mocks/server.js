import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// this file is used to setup the server for the client side to use in tests

export const server = setupServer(...handlers);
