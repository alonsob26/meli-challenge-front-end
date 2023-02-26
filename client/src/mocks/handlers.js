import { rest } from "msw";

const API_URL = process.env.REACT_APP_API_URL;

export const handlers = [
  // Handles a GET /items/:id request
  rest.get(`${API_URL}/items/:id`, (req, res, ctx) => {
    if (req.params.id === "MLA878621319") {
      return res(
        ctx.json({
          status: 200,
          data: {},
        })
      );
    }
    return res(
      ctx.json({
        status: 200,
        data: {},
      })
    );
  }),

  // Handles a GET /items request
  rest.get(`${API_URL}/items`, (req, res, ctx) => {
    if (
      req.url.searchParams.get("q") ===
      "sdfsdfsdfsdfjksdnfkjsdkfjsdkfhksjdfhkskhj"
    ) {
      return res(
        ctx.json({
          status: 200,
          data: [],
        })
      );
    }
    return res(
      ctx.json({
        status: 200,
        data: {
          author: { name: "Alonso", lastname: "Burgos" },
          categories: [{ id: "MLA90337", name: "Patinetas" }],
          items: [
            {
              id: "MLA878621319",
              title: "Skate Patineta Trucks De Aluminio Maple 80 X 20 Cm ",
              price: { currency: "ARS", amount: 8739, decimals: 0 },
              picture:
                "http://http2.mlstatic.com/D_873884-MLA50042239374_052022-O.jpg",
              condition: "new",
              free_shipping: true,
              location: "Capital Federal",
            },
          ],
        },
      })
    );
  }),
];
