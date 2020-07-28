import React from "react";
import Nav from "./components/Nav";
import Meditation from "./images/Screen Shot 2020-07-28 at 12.14.47 PM.png";
import Corporate from "./images/Screen Shot 2020-07-28 at 12.22.45 PM.png";
import Mind from "./images/Screen Shot 2020-07-28 at 12.26.03 PM.png";
import Principles from './images/Screen Shot 2020-07-28 at 12.48.16 PM.png'
import "./App.css";
import "./styles/Nav.css";

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
      <div class="nav-container">
        <Nav />
      </div>
      <div class="home">
        <h1>Mind</h1>
        <img class="meditation" src={Meditation} />
      </div>
      <div class="clients" id="clients">
        <img class="mind" src={Mind} />
        <img class="meditation-corporate" src={Corporate} />
      </div>
      <div class="book">
        <h1 class="meditation-book">Book your meditation</h1>
      </div>
      <div class="about" id="about">
        <h1 class='about-title'>A modern, secular, research based meditation practice</h1>
        <p class='about-blurb'>We partner with organizations to lead employees in in-office meditation, structured on the principles of education and practice.
        We educate participants on the mechanisms behind meditation, as well as share research on it's astounding    effects and benefits. This understanding, coupled with clear instruction during the practice itself, results   in experiencing deep focus, productivity and relaxation — while simultaneously alleviating stress and anxiety. </p>
        <h3>Bring meditation to your company</h3>
      </div>
      <div class="book">
        <h1 class="meditation-book">Get started</h1>
      </div>
      <div >
<img src={Principles} class='meditation-corporate'/>
      </div>
      <div class='about-meditation'>
        <h1>About Mediation</h1>
        <h3>To understand the benefits of meditation, we must first understand how our minds and memories work.</h3>
        <p>Throughout the day, we receive millions of new stimuli. These are observed and recorded by our short term (or working) memory. </p>
        <p>
          During periods of limited stimulation, most notably during sleep but also during meditation, habitual exercise, or prayer, these memories are transferred from short term to long term memory. </p>
        <p>Now, when we access long term memory, it is not like going into a filing cabinet — pulling out one memory or another. Rather, we create complex associations with each experience and sensory stimuli. </p>
        <p>For example, when looking at a traffic cone, we access our long term memory and are able to create associations with other orange items – a pumpkin, an orange, a life vest, etc. – despite each having very different use cases. </p>
        <p>This network of long term memory is called a schema. It is what allows us to have those deep, often creative or complex, thoughts — and experience those “Ahha!” moments. </p>
        <p>However, if our working memory is constantly stimulated, such as by the incessant alerts of our devices, we do not allow time and space for those short term memories to move to long term memories. </p>
        <p>We remain in a constant state of stimulating our short term (or working) memory, we only allow for surface thoughts  — preventing deep thought.</p>
        <h3>Mind Guided Meditation trains focus; empowering participants to remove distraction and welcome deep thought.</h3>
      </div>
      <div class='learn-more'>
        <h1>Want to learn more?</h1>
        <h1>Check out these impressive studies</h1>
      </div>
      <div class='img-container'>

      </div>
      {/* <div class="corporate-sessions" id="corporate">
        <h2>Corporate</h2>
      </div> */}
      <div class='get-started'>
        <h1>Get Started</h1>
      </div>
      <div class="private-sessions" id="private">
        <h2>Private</h2>
      </div>
    </div>
  );
}

export default App;
