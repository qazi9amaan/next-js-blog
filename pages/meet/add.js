import { useRouter } from "next/router";
import { Fragment, useState } from "react";


function Add({ setTitle }) {
  setTitle("Add a place");

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState();
  const [image, setimage] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description.trim(),
      image: image,
      url: title.replaceAll(" ", "-").toLowerCase(),
    };
    uploadData(data);
  };

  async function uploadData(data) {
    const reqresult = await fetch("/api/new-place", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await reqresult.json();
    console.log(result);

    setTitle("");
    setimage("");
    setdescription("");

    router.push("/");
  }

  return (
    <Fragment>
      <h4 className="mb-3">Add a place</h4>
      <div className="">
        <h6 className="mt-1 bg-light pt-2 pb-2 ps-2 text-muted border-rounded">
          meet/
          <span className="text-primary">
            {title.replaceAll(" ", "-").toLowerCase()}
          </span>
        </h6>
        <form method="post" onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Image link
            </label>
            <input
              type="url"
              value={image}
              className="form-control"
              onChange={(e) => setimage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              onChange={(e) => setdescription(e.target.value)}
              type="text"
              className="form-control"
              value={description}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </Fragment>
  );
}
export default Add;