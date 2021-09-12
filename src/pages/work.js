import * as React from "react";
//import React from "react"
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

const WorkPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joshua Blewitt - Work</title>
      </Helmet>
      <Header></Header>
      
      <Footer></Footer>
    </div>
  );
};

export default WorkPage;
