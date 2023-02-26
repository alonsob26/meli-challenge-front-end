import { getItems, searchItems, getItem } from "./items";

describe("Items service", () => {
  it("should return items", async () => {
    const items = await getItems();
    expect(items).toEqual({
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
    });
  });
});

describe("Search items service", () => {
  it("should return items", async () => {
    const items = await searchItems("patineta");
    expect(items).toEqual({
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
    });
  });

  it("should return empty items", async () => {
    const items = await searchItems(
      "OnlyNeedSomeRareStringToReturnNotFoundItemsIfHaveErrorFromBackendWillShowDefaultItems"
    );
    expect(items).toEqual({
      status: 200,
      data: [],
    });
  });
});

describe("Item service", () => {
  it("should return item", async () => {
    const item = await getItem("MLA878621319");
    expect(item).toEqual({
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
    });
  });

  it("should return empty item", async () => {
    const item = await getItem("123123123123");
    expect(item).toEqual({
      status: 200,
      data: [],
    });
  });
});
