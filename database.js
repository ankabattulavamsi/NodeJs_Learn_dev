const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://vamsiankabattula97:Vamsidev@cluster.5ne3k.mongodb.net/";

const client = new MongoClient(url);

const dbName = "Hello";

async function main() {
  await client.connect();
  console.log("Connected to the server");

  const db = client.db(dbName);
  const collection = db.collection("User");
  console.log("Connected to the database");

  const data = {
    firstName: "Raghav",
    lastName: "Singh",
    age: "23",
    location: "Muradnagar",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
