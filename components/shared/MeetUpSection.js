import { Fragment } from "react";
import Meet from "./Meet";

function MeetUpSection({ places }) {
  return (
    <Fragment>
      {places.map((item) => (
        <Meet key={item.key} meet={item} />
      ))}
    </Fragment>
  );
}
export default MeetUpSection;