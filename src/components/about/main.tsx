import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I&apos;m a software engineer from Mexico. Currently I&apos;m employed at
        <strong style={{ color: "#E60023" }}> Pinterest</strong> as a fullstack
        engineer where I believe we&apos;re doing a lot of cool stuff.
      </p>
      <p>I have experience with a bunch of technologies:</p>
      <ul>
        <li>TypeScript</li>
        <li>Java</li>
        <li>Python</li>
        <li>React</li>
        <li>C++</li>
        <li>Flutter</li>
        <li>SQL</li>
        <li>GraphQL</li>
        <li>Ethereum</li>
        <li>And much more...</li>
      </ul>
      <p>
        I&apos;ve worked in a lot of different projects, from mobile apps to web
        apps, from videogames to blockchain. I&apos;m always looking for new
        challenges and new technologies to learn. I&apos;m a big fan of open
        source and I&apos;ve contributed to a few projects. I&apos;m also a big
        fan of music and art...
      </p>
    </div>
  );
};

export default About;
