const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://kakarlasarath4:Kscr2004@victory.zy0qazq.mongodb.net/?retryWrites=true&w=majority&appName=Victory";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    let dbobj = await client.db("victory_db").listCollections().toArray()
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    console.log(dbobj);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
