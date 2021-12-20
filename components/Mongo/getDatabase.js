import { MongoClient } from "mongodb";

async function getDatabase(){
    const client = await MongoClient.connect(
// ADD YOUR MONGO DB URL HERE
        );
    return { client: client, db: client.db() };
}
export default getDatabase;