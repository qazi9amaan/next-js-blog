import Link from "next/link";

function Meet({ meet }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div class="col-md-4">
          <img style={{height:"200px" ,width:"100%",objectFit:"cover"}} src={meet.image} class="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link href={"meet/" + meet.url}>
              <h4 className="card-title pe-auto cursor-pointer ">
                {meet.title}
              </h4>
            </Link>
            <p className="card-text text-muted">{meet.description.substring(0,350)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meet;