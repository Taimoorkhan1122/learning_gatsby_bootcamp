require("dotenv").config()
const faunadb = require("faunadb")
const q = faunadb.query

;(async () => {
  if (process.env.TESTDB_KEY) {
    var client = new faunadb.Client({
      //   secret: process.env.FUANA_ADMIN_KEY,
      secret: process.env.TESTDB_KEY,
      domain: "db.us.fauna.com",
      scheme: "https",
    })

    try {
      // step 01: creaet database
      //   const result = await client.query(q.CreateDatabase({ name: "test-db" }))

      // step 02: create secret key for database
      //   const result = await client.query(
      //     q.CreateKey({
      //       database: q.Database("test-db"),
      //       role: "server",
      //     })
      //   )

      // step 03: create collection inside newly created DB
      // const result = await client.query(
      //  q.CreateCollection({name: 'posts'})
      // )

      // step 03: create index for searching in collection
      //   const result = await client.query(
      //     q.CreateIndex({
      //       name: "posts_by_title",
      //       source: q.Collection("posts"),
      //       terms: [{ field: ["data", "title"] }],
      //     })
      //   )

      // step 04: create document inside our collection
      const result = await client.query(
        q.Create(q.Collection("posts"), {
          data: {
            postBy: "Taimoor khan",
            title: "Learning FuanaDB",
            content: "the quick brown fox jumps over the lazy dog.",
          },
        })
      )

      console.log("save the DB server key: -> ", result)
    } catch (error) {
      if (
        error.requestResult.statusCode === 400 &&
        error.message === "instance already exists"
      ) {
        console.log("Database with this name already exists")
      } else {
        console.log("error creating DB ", error)
      }
    }
  } else {
    console.log("No FAUNADB_ADMIN_SECRET in .env file, skipping Key Creation")
  }
})()
