import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('{mongodb+srv://admin:admin@cluster0.qqyg9mg.mongodb.net/?retryWrites=true&w=majority}', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



async function database(req, res, next) {
    
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('curriculum');
  return next();
}

const middlewares = nextConnect();

middlewares.use(database);

export default middlewares;