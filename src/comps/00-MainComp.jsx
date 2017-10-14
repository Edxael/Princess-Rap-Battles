import React from 'react';
import Avalon from './img/wa.png';

class MainComp extends React.Component {
  render() {
    const avaSty = { maxWidth: "200px" }
    return(
      <div>
        <h1>Princess Rap Battles</h1>
        <p>This are videos created by <strong>Whitney Avalon</strong></p>
        <br/>
        <img style={avaSty} src={Avalon} alt="Miss Pic"/>
        <br/><br/>
        <p>Whitney Avalon is an American actress, writer, producer, singer, and rapper best known for creating the Princess Rap Battle series on YouTube, where her channel has over 307 million views. She uploaded her first YouTube video in September 2010</p>
        <p>To see more of her vides here is a link to her YouTube channel:<a href="https://www.youtube.com/channel/UCNyJk0eoESO3CxAmrktAB5w" target="_blank" ><strong>Whitney Avalon</strong></a> </p>
        <p>With no more delays, enjoy the RAPS....</p>
    </div>
    )
  }
}

export default MainComp;
