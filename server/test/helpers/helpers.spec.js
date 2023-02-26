const { fetchUrl } = require("../../app/helpers/fetchUrl");

describe("fetchUrl search url", () => {
  it("deberia retornar un objeto", async () => {
    const result = await fetchUrl(
      "https://api.mercadolibre.com/sites/MLA/search?q=iphone"
    );
    expect(typeof result).toBe("object");
    expect(result).toHaveProperty("results");
    expect(result.results).toBeInstanceOf(Array);
  });
});

describe("fetchUrl item url", () => {
  it("deberia retornar un objeto", async () => {
    const result = await fetchUrl(
      "https://api.mercadolibre.com/items/MLA856263367"
    );
    expect(typeof result).toBe("object");
  });
});

describe("fetchUrl category url", () => {
  it("deberia retornar un objeto", async () => {
    const result = await fetchUrl(
      "https://api.mercadolibre.com/categories/MLA1055"
    );
    expect(typeof result).toBe("object");
  });
});
