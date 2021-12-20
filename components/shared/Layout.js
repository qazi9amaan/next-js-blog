import { Fragment } from "react";
import HeaderTag from "../shared/header";
import Navbar from "../shared/navbar";

function Layout({ children, title }) {
  return (
    <html>
      <Fragment>
        <HeaderTag title={title} />
        <body className="container">
          <main className="row mt-2">
            <div className="col-md-3">
              <div className=" h-100">
                <Navbar />
              </div>
            </div>
            <div className="col-md-9">
              <div className=" fixed-height-main-sec pt-2">{children}</div>
            </div>
          </main>
        </body>
      </Fragment>
    </html>
  );
}

export default Layout;