import { Fragment, useEffect, useState } from "react";
import getDatabase from "../../components/Mongo/getDatabase";
import MeetLong from "../../components/shared/MeetLong";


function NewsPage({ places, setTitle }) {
  setTitle("Home");

  return (
    <Fragment>
      <h4 className="mb-3">Places to visit</h4>
      <div className="row gy-3 gx-2">
        {places.map((item) => (
          <MeetLong key={item.key} meet={item} />
        ))}
      </div>
    </Fragment>
  );
}
export async function getStaticProps(){
   
  const { client, db } = await getDatabase();
   const placesCollec = db.collection("places");

   const places = await placesCollec.find().sort({ _id: -1 }).toArray();
   client.close();
   return {
     props: {
       places: places.map((item) => ({
         title: item.title,
         description: item.description,
         image: item.image,
         url: item.url,
         id: item._id.toString(),
       })),
     },
   };

}

export default NewsPage;
