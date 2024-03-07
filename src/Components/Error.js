import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>oopss something went wrong </h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </>
  );
};

export default Error;
