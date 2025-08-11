import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../app.js";

describe("Blog API Tests", () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  test("GET /posts - should return all blogs with fake auth", async () => {
    // Create a test user without worrying about tokens
    await request(app).post("/auth/register").send({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });

    // Instead of real login/token, just use a dummy token string
    const fakeToken = "FAKE_JWT_TOKEN_FOR_TESTING";

    // Call your protected route with fake token (assuming your auth middleware just verifies presence)
    const res = await request(app)
      .get("/posts")
      .set("Authorization", `Bearer ${fakeToken}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
