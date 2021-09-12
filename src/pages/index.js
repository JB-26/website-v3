import * as React from "react"
//import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../images/new_2021.jpg"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Joshua Blewitt - Home</title>
      <meta name="icon" href="src/images/favicon.ico" />
    </Helmet>
    <Header></Header>
    <div className="content">
      <div className="left">
        <h1>
          Hey, I'm Joshua Blewitt{" "}
          <span role="img" aria-label="string">
            👋
          </span>
        </h1>
        <hr className="fill"></hr>
        <p>
          I'm an IT Professional! With interests in development and UX design. I'm based in Milton Keynes, United
          Kingdom.<br></br>I have a first class degree in Computer Science from
          Anglia Ruskin University.<br></br>I've been working in the IT industry
          for 7 years and I'm currently a software tester.<br></br>
          I've worked for companies such as Domino's Pizza Group.
        </p>
        <div id="buttonContainer">
          <a id="emailButton" href="mailto:joshblewitt@protonmail.com">
            Get in touch!
          </a>
        </div>
      </div>
      <div className="right">
        <img id="image" src={Image} alt="Me at the pub!"></img>
      </div>
    </div>
    <Footer></Footer>
  </div>
  )
}

export default IndexPage;
