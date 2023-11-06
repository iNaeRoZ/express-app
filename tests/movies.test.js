const request = require("supertest");
const app = require("../app");
const { describe } = require("node:test");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/", () => {
  it("should return one movie", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});
