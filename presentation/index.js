// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  software: require("../assets/software.jpg"),
  moreSoftware: require("../assets/more-software.jpg"),
  surprise: require("../assets/surprise.gif"),
  elation: require("../assets/elation.gif"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#fc4a1a"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Plan for Today
            </Heading>
            <Appear>
              <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">
                Talk About Me (2 minutes)
              </Text>
            </Appear>
            <Appear>
              <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">
                Talk About Software (5 minutes)
              </Text>
            </Appear>
            <Appear>
              <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">
                You Will Write Software (15 Minutes)
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.surprise.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Text textSize="3.0em" margin="20px 0px 0px" bold textColor="white">
              Lee Carter
            </Text>
            <Appear>
              <Text textSize="2.0em" margin="20px 0px 0px" bold textColor="white">
                Software Developer
              </Text>
            </Appear>
            <Appear>
              <Text textSize="2.0em" margin="20px 0px 0px" bold textColor="white">
                Computer Programmer
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.software.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              What Is Software?
            </Heading>
            <Appear>
              <Heading size={1} fit caps lineHeight={1} textColor="white">
                Instructions
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit caps lineHeight={1} textColor="white">
                ...that tell the computer what to do
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgImage={images.moreSoftware.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              What Does "Code" Look Like?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary">
              Ready to Write Some Software?
            </Heading>
            <Image src={images.elation.replace("/", "")} margin="0px auto 40px" height="400px"/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit lineHeight={1} textColor="white">
              <Link href="bit.ly/gati123">bit.ly/gati123</Link>
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Last Question
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              When Can You Start
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Learning to Write
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Software?
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Start Now
            </Heading>
            <Appear>
              <Heading size={1} fit caps lineHeight={1} textColor="white">
                Study & Practice
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit caps lineHeight={1} textColor="white">
                Ask For Help
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Questions?
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Thank You
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
