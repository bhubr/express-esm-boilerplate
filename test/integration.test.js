import request from "supertest";
import assert from "assert";
import app from "../src/app";

describe("Integration tests", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/api/sample").expect(200);
    assert.equal(response.body.message, "Hello World");
  });
});
