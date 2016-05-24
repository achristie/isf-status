// Import React
import React from "react";

// Import Spectacle Core tags
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image,
  Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";

import Flavors from './flavors';
import LandingPage from './landing-page';
import Npm from './npm';
import Elements from './elements';
import DocsPage from './docs-page';
import Wireframes from './wireframes';
import SlideHeading from './slide-heading.js';

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
  city: require("../assets/city.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#3F7E8A"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <SlideHeading subHeading="Q2 Objectives"/>
            <Layout>
              <Fill>
                <List>
                  <Appear><ListItem>Publish to NPM </ListItem></Appear>
                  <Appear><ListItem>Fundamental Elements</ListItem></Appear>
                  <Appear><ListItem>Landing Page</ListItem></Appear>
                  <Appear><ListItem>Flavors</ListItem></Appear>
                  <Appear><ListItem>Wireframe Examples</ListItem></Appear>
                  <Appear><ListItem>Documentation Page</ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <Appear><Image src={images.city} width="100%"/></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Npm />
          </Slide>
          <Slide>
            <Elements />
          </Slide>
          <Slide>
            <LandingPage />
          </Slide>
          <Slide>
            <Flavors />
          </Slide>
          <Slide>
            <Wireframes />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
