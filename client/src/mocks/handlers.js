import { rest } from "msw";

const API_URL = process.env.REACT_APP_API_URL;

export const handlers = [
  // Handles a GET /items/:id request
  rest.get(`${API_URL}/items/:id`, (req, res, ctx) => {
    if (req.params.id === "123123123123") {
      return res(
        ctx.json({
          status: 200,
          data: [],
        })
      );
    }
    if (req.params.id === "MLA878621319") {
      return res(
        ctx.json({
          status: 200,
          data: {
            author: { name: "Alonso", lastname: "Burgos" },
            item: {
              id: "MLA878621319",
              title: "Skate Patineta Trucks De Aluminio Maple 80 X 20 Cm ",
              price: { currency: "ARS", amount: 8739, decimals: 0 },
              picture:
                "http://http2.mlstatic.com/D_873884-MLA50042239374_052022-O.jpg",
              condition: "new",
              free_shipping: true,
              sold_quantity: 1350,
              path_from_root: [
                { id: "MLA1132", name: "Juegos y Juguetes" },
                { id: "MLA12087", name: "Patines y Patinetas" },
                { id: "MLA90337", name: "Patinetas" },
              ],
              description:
                "Skate Patineta Trucks De Aluminio Maple 80 X 20 Cm\n\nSkate LaLeLu A3108D. Tabla Maple doble Cola\n\nTrucks de aluminio de 12,7 cm.\n\nRuedas de PU de 50 x 36 MM.\n\nMedidas de la tabla 80 x 20cm.",
            },
          },
        })
      );
    }
  }),

  // Handles a GET /items request
  rest.get(`${API_URL}/items`, (req, res, ctx) => {
    if (
      req.url.searchParams.get("q") ===
      "OnlyNeedSomeRareStringToReturnNotFoundItemsIfHaveErrorFromBackendWillShowDefaultItems"
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
