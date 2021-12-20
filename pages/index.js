import { Fragment } from "react";
import getDatabase from "../components/Mongo/getDatabase";
import MeetUpSection from "../components/shared/MeetUpSection";

function HomePage({ places, setTitle }) {
  
  setTitle("Home")

  return (
    <Fragment>
      <h4 className="mb-3">Recently.</h4>
      <MeetUpSection places={places} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await getDatabase();
  const placesCollec = db.collection("places");
  
  const places = await placesCollec.find().sort({ _id: -1 }).limit(10).toArray();
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

export default HomePage;