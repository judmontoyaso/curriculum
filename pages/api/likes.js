import clientPromise from "../../mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("curriculum");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newLike = await db.collection("likes").insertOne(bodyObject);
      res.json(newLike[0]);
      break;
    case "GET":
      const likes = await db.collection("likes").find({}).toArray();
      res.json(likes[0].likes);
      break;
  }
}