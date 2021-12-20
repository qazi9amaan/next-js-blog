import getDatabase from "../../components/Mongo/getDatabase";

async function handler(req,res){
    if(req.method == "POST"){
        const data = req.body;
        
        const { client, db } = await getDatabase();
        const placesCollec = db.collection("places");
        
        const result = await placesCollec.insertOne(data);
        client.close();
        res.status(201).json({msg:"done"})
    }
}

export default handler;