import should from "should";
import dbReset from "../../../bin/sync-database.js";
import request from "supertest";
import { sequelize, User }  from "../../models.js";
import app from "../../app.js";


describe("GET /users", () => {
  before("sync database", (done) => {
    dbReset().then(() => done());
  })
  const users = [
    { name: "alice" },
    { name: "bob" },
    { name: "chris" },
  ];
  before("insert 3 users into database", (done) => {
    User.bulkCreate(users).then(() => done());
  });
  it("should return array", (done) => {
    request(app)
      .get("/users")
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        res.body.should.be.an.instanceof(Array).and.have.length(3)
        res.body.map((user) => {
          user.should.have.properties("id", "name")
          user.id.should.be.a.Number()
          user.name.should.be.a.String()
        });
        done();
      });
  });
  after("clear up database", (done) => {
    dbReset().then(() => done());
  });
});

// describe("GET /users", () => {
//   before("sync database", async () => {
//     await sequelize.sync({ force: true }).then(() => {
//       console.log("Database sync");
//     })
//   });
//   it("should return 200 status code", (done) => {
//     request(app).get("/users").expect(200).end((err, res) =>{
//       if (err) throw err;
//       done()
//     });
//   });

//   it("should return array", (done) => {
//     request(app).get("/users").expect(200).end((err, res) =>{
//       if (err) throw err;
//       res.body.should.be.an.instanceof(Array).and.have.length(4);
//       res.body.map(user =>{
//         user.should.have.properties("id","name");
//         user.id.should.be.a.Number();
//         user.name.should.be.a.String();
//       });
//       done();
//     });
//   });
// });

// describe("PUT /users/:id", () => {
//   it.only("should return 200 status code", (done) => {
//     request(app).put("/users/1").send({ name: "puddle" }).end((err, res) => {
//       if (err) throw err;
//       done();
//     });
//   });
// });
