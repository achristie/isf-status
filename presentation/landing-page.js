import React from 'react';
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image,
  Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";

export default (props) => {
  return (
    <div>
      <Heading fit caps> Ipreo Style Framework </Heading>
      <Heading size={6} italic textAlign="left">{props.subHeading}</Heading>     
    </div>
  );
}

