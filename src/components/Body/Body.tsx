import React, { useEffect } from "react";

import { IProduct } from "../../models/Product";

import "./Body.scss";

const Body = ({
  data,
}: {
  data: IProduct[],
}) => {

  return (
    <div className="body">
      TABLE
    </div>
  );
};

export default Body;