import clientPromise from "../../mongodb";
import NextCors from 'nextjs-cors';


export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("curriculum");
  var ObjectId = require('mongodb').ObjectID;
  switch (req.method) {
    
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newLike = await db.collection("likes");
      newLike = newLike.updateOne(
        { _id: ObjectId("6374645d7cb97b861a95f33c")},
        { "$set": {likes: bodyObject}  }
        );
        res.json(newLike);
        break;
        case "GET":
      const likes = await db.collection("likes").find({}).toArray();
      res.json(likes);
      break;
  }
}
