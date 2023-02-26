const request = require("supertest");
const app = require("../../app");

describe("pruebas de la api de items", () => {
  describe(" GET /api/items", () => {
    it("deberia devolver la estructura de respuesta correcta", async () => {
      const response = await request(app).get("/api/items?q=iphone").send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("data");
      expect(response.body.data).toHaveProperty("author");
      expect(response.body.data.author).toHaveProperty("name");
      expect(response.body.data.author).toHaveProperty("lastname");
      expect(typeof response.body.data.author.name).toBe("string");
      expect(typeof response.body.data.author.lastname).toBe("string");
      expect(response.body.data).toHaveProperty("categories");
      expect(response.body.data.categories).toBeInstanceOf(Array);
      expect(response.body.data.categories[0]).toHaveProperty("id");
      expect(typeof response.body.data.categories[0].id).toBe("string");
      expect(response.body.data.categories[0]).toHaveProperty("name");
      expect(typeof response.body.data.categories[0].name).toBe("string");
      expect(response.body.data).toHaveProperty("items");
      expect(response.body.data.items[0]).toHaveProperty("id");
      expect(typeof response.body.data.items[0].id).toBe("string");
      expect(response.body.data.items[0]).toHaveProperty("title");
      expect(typeof response.body.data.items[0].title).toBe("string");
      expect(response.body.data.items[0]).toHaveProperty("price");
      expect(typeof response.body.data.items[0].price).toBe("object");
      expect(response.body.data.items[0].price).toHaveProperty("currency");
      expect(typeof response.body.data.items[0].price.currency).toBe("string");
      expect(response.body.data.items[0].price).toHaveProperty("amount");
      expect(typeof response.body.data.items[0].price.amount).toBe("number");
      expect(response.body.data.items[0].price).toHaveProperty("decimals");
      expect(typeof response.body.data.items[0].price.decimals).toBe("number");
      expect(response.body.data.items[0]).toHaveProperty("picture");
      expect(typeof response.body.data.items[0].picture).toBe("string");
      expect(response.body.data.items[0]).toHaveProperty("condition");
      expect(typeof response.body.data.items[0].condition).toBe("string");
      expect(response.body.data.items[0]).toHaveProperty("free_shipping");
      expect(typeof response.body.data.items[0].free_shipping).toBe("boolean");
    });
    it("deberia devolver data con un array vacio al no encontrar items", async () => {
      const response = await request(app)
        .get("/api/items?q=asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf")
        .send();
      expect(response.statusCode).toBe(500);
      console.log(response.body);
      expect(response.body.data).toEqual([]);
    });
  });
});
