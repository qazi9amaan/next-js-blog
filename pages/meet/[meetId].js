import Link from 'next/link';
import {useRouter} from 'next/router'
import { Fragment } from 'react'
import getDatabase from "../../components/Mongo/getDatabase";



function DetailsPage({ meet, setTitle }) {
  setTitle(meet.title);

  return (
    <Fragment>
      <div className="fixed-height-main-sec">
        <img
          src={meet.image}
          style={{ height: "380px", objectFit: "cover" }}
          className=" w-100 rounded rounded-lg"
        />
        <h6 className="mt-2 d-flex mb-2 bg-light pt-3 pb-3 ps-2 text-muted border-rounded">
          <Link href={"/meet"}>
            <h6 className=" pe-auto cursor-pointer ">places/</h6>
          </Link>
          <Link href={"/meet/" + meet.url}>
            <h6 className=" text-dark pe-auto cursor-pointer ">
              {meet.title.replaceAll(" ", "-").toLowerCase()}
            </h6>
          </Link>
        </h6>
        <h2 className="mb-1 mt-3 ">{meet.title}</h2>
        <p className=" mt-3 text-muted">{meet.description}</p>
      </div>
    </Fragment>
  );
}


export async function getServerSideProps(context) {
  const newsId = context.params.meetId;
   console.log(newsId);

   const { client, db } = await getDatabase();
   const placesCollec = db.collection("places");

   const item = await placesCollec.findOne({ url: newsId });
   client.close();
   console.log(item)
   return {
     props: {
       meet: {
         title: item.title,
         description: item.description,
         image: item.image,
         url: item.url,
         id: item._id.toString(),
       },
     },
   };
}
export default DetailsPage;
