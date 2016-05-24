import React from 'react';
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image,
  Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";

export default () => {
  return (
    <div>
      <BlockQuote>
        <Quote>Andrew is the best!</Quote>
        <Cite>Hey</Cite>
      </BlockQuote>   
    </div>
  );
}