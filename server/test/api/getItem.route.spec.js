const request = require("supertest");
const app = require("../../app");

describe("pruebas de la api de item", () => {
  describe(" GET /api/item/:id", () => {
    it("deberia devolver un item con la estructura de respuesta correcta", async () => {
      const response = await request(app).get("/api/items/MLA878621319").send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("data");
      expect(response.body.data).toHaveProperty("author");
      expect(response.body.data.author).toHaveProperty("name");
      expect(response.body.data.author).toHaveProperty("lastname");
      expect(typeof response.body.data.author.name).toBe("string");
      expect(typeof response.body.data.author.lastname).toBe("string");
      expect(response.body.data).toHaveProperty("item");
      expect(response.body.data.item).toHaveProperty("id");
      expect(typeof response.body.data.item.id).toBe("string");
      expect(response.body.data.item).toHaveProperty("title");
      expect(typeof response.body.data.item.title).toBe("string");
      expect(response.body.data.item).toHaveProperty("price");
      expect(typeof response.body.data.item.price).toBe("object");
      expect(response.body.data.item.price).toHaveProperty("currency");
      expect(typeof response.body.data.item.price.currency).toBe("string");
      expect(response.body.data.item.price).toHaveProperty("amount");
      expect(typeof response.body.data.item.price.amount).toBe("number");
      expect(response.body.data.item.price).toHaveProperty("decimals");
      expect(typeof response.body.data.item.price.decimals).toBe("number");
      expect(response.body.data.item).toHaveProperty("picture");
      expect(typeof response.body.data.item.picture).toBe("string");
      expect(response.body.data.item).toHaveProperty("condition");
      expect(typeof response.body.data.item.condition).toBe("string");
      expect(response.body.data.item).toHaveProperty("free_shipping");
      expect(typeof response.body.data.item.free_shipping).toBe("boolean");
      expect(response.body.data.item).toHaveProperty("sold_quantity");
      expect(typeof response.body.data.item.sold_quantity).toBe("number");
      expect(response.body.data.item).toHaveProperty("description");
      expect(typeof response.body.data.item.description).toBe("string");
    });
    it("deberia devolver un status 500 al no encontrar un item", async () => {
      const response = await request(app)
        .get("/api/items/MLA878621319asdfasdfasdfasdfasdfasdfasdfasdfasdf")
        .send();
      expect(response.statusCode).toBe(500);
      expect(response.body.data).toEqual([]);
    });
  });
});
