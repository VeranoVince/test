import React, { useState } from "react";
import Blog from "../components/Blog";
import NavScroll from "../components/NavScroll";

function Blogpage() {
  return (
    <>
      <NavScroll />
      <Blog />
    </>
  );
}

export default Blogpage;
