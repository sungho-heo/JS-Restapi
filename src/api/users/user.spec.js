import should from "should";
import request from "supertest";
import app from "../../app.js";


describe("GET /users", () => {
  it("should return 200 status code", (done) => {
    request(app).get("/users").expect(200).end((err, res) =>{
      if (err) throw err;
      done()
    });
  });

  it("should return array", (done) => {
    request(app).get("/users").expect(200).end((err, res) =>{
      if (err) throw err;
      res.body.should.be.an.instanceof(Array).and.have.length(4);
      res.body.map(user =>{
        user.should.have.properties("id","name");
        user.id.should.be.a.Number();
        user.name.should.be.a.String();
      });
      done();
    });
  });
});

describe("PUT /users/:id", () => {
  it.only("should return 200 status code", (done) => {
    request(app).put("/users/1").send({ name: "puddle" }).end((err, res) => {
      if (err) throw err;
      done();
    });
  });
});
