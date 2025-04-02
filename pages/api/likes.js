import clientPromise from "../../mongodb";
import NextCors from 'nextjs-cors';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  // Apply CORS
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  try {
    const client = await clientPromise;
    const db = client.db("curriculum");
    
    switch (req.method) {
      case "POST":
        let bodyObject = req.body;
        // If the body is already an object, we don't need to parse it
        if (typeof bodyObject === 'string') {
          bodyObject = JSON.parse(bodyObject);
        }
        
        const newLike = await db.collection("likes").updateOne(
          { _id: new ObjectId("6374645d7cb97b861a95f33c")},
          { "$set": {likes: bodyObject} }
        );
        
        res.json(newLike);
        break;
      
      case "GET":
        const likes = await db.collection("likes").find({}).toArray();
        res.json(likes);
        break;
      
      default:
        res.status(405).json({ message: "Method not allowed" });
        break;
    }
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
}
