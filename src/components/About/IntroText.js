import React from "react";
import Typist from "react-typist";

const IntroText = () => {
  return (
    <div style={{ width: "100%", paddingRight: "32px", maxWidth: "650px" }}>
      <Typist avgTypingDelay={10}>
        <code style={{ color: "#00CCCC" }}>
          Hi!, <Typist.Delay ms={300} />
          I'm Kevin.
          <Typist.Delay ms={400} />
          <br />
          <br />
          I'm a husband, father and passionate developer.
          <br />
          <br />
          <Typist.Delay ms={100} />
          I build websites, web applications and business focused software
          utilities.
          <br />
          <br />
          <Typist.Delay ms={200} /> I've experienced several different
          programming languages and technologies since I started this journey in
          2007, but fell in love with the web development community and gained
          an appreciation for open source that drives me to publish things like
          this website publicly.
          <br />
          <br />
          <Typist.Delay ms={400} />
          Please join me by submitting any issues to this website or other repos
          I have on GitHub, or sending me a tweet or DM @kbrock84 (links above).
        </code>
      </Typist>
    </div>
  );
};

export default IntroText;
