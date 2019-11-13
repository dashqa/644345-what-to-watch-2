import React from "react";
import Spinner from "mm-loaders/lib/components/MDSpinner";

const Loader = () => {
  return (
    <div
      style={{
        position: `absolute`,
        left: `50vw`,
        top: `50vh`,
        transform: `translate(-50%, -50%)`
      }}>
      <Spinner width={250} height={250} borderWidth={20}/>
    </div>
  );
};
export default Loader;

