import Link from "next/link";

function MeetLong({ meet }) {
  return (
    <div className="col-4">
      <div class="card ">
        <img
          src={meet.image}
          style={{ height: "150px", objectFit: "cover" }}
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <Link href={"meet/" + meet.url}>
            <h6 className="card-title stretched-link pe-auto cursor-pointer ">
              {meet.title.substring(0, 30)}
            </h6>
          </Link>
          <small class="card-text text-muted">
            {meet.description.substring(0, 70)}
          </small>
        </div>
      </div>
    </div>
  );
}

export default MeetLong;
