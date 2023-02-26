const request = require("supertest");
const app = require("../../app");

describe("pruebas de la api de items", () => {
  describe(" GET /api/items", () => {
    it("deberia devolver un array de items", async () => {
      const response = await request(app).get("/api/items?q=iphone").send();
      expect(response.statusCode).toBe(200);
      expect(response.body.data.items).toBeInstanceOf(Array);
    });
    it("deberia devolver data con un array vacio al no encontrar items", async () => {
      const response = await request(app)
        .get("/api/items?q=asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf")
        .send();
      expect(response.statusCode).toBe(200);
      expect(response.body.data).toEqual([]);
    });
    it("deberia devolver un error 200 y listar items para dashboard al no recibir un query", async () => {
      const response = await request(app).get("/api/items").send();
      expect(response.statusCode).toBe(200);
      expect(response.body.data.items).toBeInstanceOf(Array);
    });
  });
});
