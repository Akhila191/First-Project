import React from "react";
import Header from "./Header";
import NewComponent from "./NewsComponent";

function User(props) {
  return (
    <>
      <div>
        <Header data={props} />
        <NewComponent />
      </div>
    </>
  );
}

export default User;