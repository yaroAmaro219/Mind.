import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Meditation from "./images/Screen Shot 2020-07-28 at 12.14.47 PM.png";
import Corporate from "./images/Screen Shot 2020-07-28 at 12.22.45 PM.png";
import Mind from "./images/Screen Shot 2020-07-28 at 12.26.03 PM.png";
import Principles from './images/Screen Shot 2020-07-28 at 12.48.16 PM.png';
import Meditate from './images/Corporate Meditation Book Now.png'
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
        <h1 class='about-title'>A modern, secular, research </h1>
        <h1 class='about-title'>based meditation practice</h1>
        <p class='about-blurb'>We partner with organizations to lead employees in in-office meditation, structured on the principles of education and practice.</p>
        <p class='about-blurb'>
        We educate participants on the mechanisms behind meditation, as well as share research on it's astounding    effects and benefits. This understanding, coupled with clear instruction during the practice itself, results   in experiencing deep focus, productivity and relaxation — while simultaneously alleviating stress and anxiety. </p>
        <h3 class='bring-sub'>Bring meditation to your company</h3>
      </div>
      <div class="book">
        <a href='#corporate' ><h1 class="mediatation-book">Get started</h1></a>
      </div>
      <div >
<img src={Principles} class='meditation-corporate'/>
      </div>
      <div class='about-meditation' id='why'>
        <h1 class='about-title2'>About Mediation</h1>
        <h3>To understand the benefits of meditation, we must first understand how our minds and memories work.</h3>
        <div class='about-div'>
          <p class='about-p'>Throughout the day, we receive millions of new stimuli. These are observed and recorded by our short term (or working) memory. </p></div>
        <div class='about-div'>
        <p class='about-p'>
            During periods of limited stimulation, most notably during sleep but also during meditation, habitual exercise, or prayer, these memories are transferred from short term to long term memory. </p></div>
        <div class='about-div'>
          <p class='about-p'>Now, when we access long term memory, it is not like going into a filing cabinet — pulling out one memory or another. Rather, we create complex associations with each experience and sensory stimuli. </p></div>
        <div class='about-div'>
          <p class='about-p'>For example, when looking at a traffic cone, we access our long term memory and are able to create associations with other orange items – a pumpkin, an orange, a life vest, etc. – despite each having very different use cases. </p></div>
        <div class='about-div'>
          <p class='about-p'>This network of long term memory is called a schema. It is what allows us to have those deep, often creative or complex, thoughts — and experience those “Ahha!” moments. </p></div>
        <div class='about-div'>
          <p class='about-p'>However, if our working memory is constantly stimulated, such as by the incessant alerts of our devices, we do not allow time and space for those short term memories to move to long term memories. </p></div>
        <div class='about-div'>
          <p class='about-p' >We remain in a constant state of stimulating our short term (or working) memory, we only allow for surface thoughts  — preventing deep thought.</p></div>
        <div class='empower-div'>
        <h3 class='empower'>Mind Guided Meditation trains focus; empowering participants </h3>
          <h3 class='empower'>to remove distraction and welcome deep thought.</h3>
          </div>
      </div>
      <div class='learn-more'>
        <h1>Want to learn more?</h1>
        <h6>Check out these impressive studies</h6>
        <div class='studies'>
        <div class='column-1'>
        <div class='learn-more-studies'>
  <a href='#' class='link'>When science meets mindfulness</a>
<p>
                Harvard

April 2018</p>
            </div>
            <div class='learn-more-studies'>
<a href='#' class='link'>Meditation: In Depth</a>
<p>
                NIH (National Institutes of Health)</p>
<p>
                January 2019 
            </p>
            </div>
            <div class='learn-more-studies'>
            <a href='#' class='link'>Effects of Mindfulness on Psychological Health: A Review of Empirical Studies</a>
<p>
                NIH (National Institutes of Health)
</p><p>
                August 2011
            </p>
            </div>
            <div class='learn-more-studies'>
           <a href='#' class='link'> Meditation affects brain networks differently in long-term meditators and novices</a>
<p>
University of Wisconsin-Madison
</p><p>
July 2018
              </p>
              </div>
        </div>
        <div class='column-2'>
        <div class='learn-more-studies'>
        <a href='#' class='link'>Meditation produces positive changes in the brain</a>
<p>
                University of Wisconsin-Madison
</p><p>
                February 2003
            </p>
              </div>
            <div class='learn-more-studies'>
           <a href='#' class='link'> Meditation for Anxiety and Depression</a>
<p>
                Johns Hopkins Medicine
</p><p>
                December 2017
            </p>
            </div>
            <div class='learn-more-studies'>
            <a href='#' class='link'>Study reveals gene expression changes with meditation</a>
<p>
                University of Wisconsin-Madison 
</p><p>
                December 2013
            </p>
            </div>
            <div class='learn-more-studies'>
           <a href='#' class='link'>Brain scans show meditation changes minds, increases attention</a> 
<p>
                University of Wisconsin-Madison
</p><p>
                June 2007
              </p>
              </div>
          </div>
          </div>
      </div>
      <div class='img-container'>
        <div class="shop1"  >
          <h3 class='strength1'> ———————— STRENGTHEN THE</h3> <h3 class='strength'> MIND.</h3>
      </div>
      </div>
      {/* <div class="corporate-sessions" id="corporate">
        <h2>Corporate</h2>
      </div> */}
      <div class='get-started' id='corporate'>
        <form class='form'>
          <h1>Get Started</h1>
          <p>Complete this form to learn more about bringing meditation to your company</p>
          <p>or</p>
          < a href='#book' class='book-a'>skip this step and book now</a>
          <div class='input-div'>
            Name*
          <input type='text' class='input' />
          </div>
          <div class='input-div'>
            Company*
          <input class='input' type='text' />
          </div>
          <div class='input-div'>
            Email*
          <input class='input' type='text' />
          </div>
          <div class='input-div'>
          Phone*
          <input class='input' type='text'/>
          </div>
          <div class='input-div'>
            Address*
          <input class='input' type='text' />
          </div> 
          <div class='input-div'>
          Message*
          <input class='input' type='text' />
          </div> 
          <button type='submit' class='book-submit' >Submit</button>
        </form>
      </div>
      <div class="book-private" id="private">
        <h2>Book Your Meditation</h2>
        <div class='book-content'>
          <img src={Meditate} class='meditate-img' />
          <div class='column-3'>
            <div class='top'>
            <h2 class='mind-h2'>Mind Guided Meditation</h2>
              <h5 class='meaditation-get'>A private meditation session.</h5>
              <h5 class='meaditation-get'>Includes session to be gifted.</h5>
            </div>
            <div class='bottom'>
            <h4 class='book-h4'>30min</h4>
            <h4 class='book-h4'>$190</h4>
              <a href='#' class='book-now-button'>Book Now</a>
              </div>
          </div>
        </div>
      </div>
      <div class="bottom-book" id="training">
        <h2>Meditation Training Course</h2>
        <p class='meditation-training'>By investing in this meditation training course, you will learn powerful, research-backed techniques and tools to strengthen your mind, overcome blocks and unlock your greatest potential.</p>
        <p class='meditation-training'>You will have unlimited access to all of our lessons online, learning at your own pace, anytime and anywhere.</p>
        <h1 class='coming-soon'>coming soon</h1>
      </div>
      <div class='footer'>
        <svg class='social' width="35" height="35" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg>
        <svg class='social' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4507 2.87656H10.0679C6.09616 2.87656 2.87646 6.09625 2.87646 10.068V24.4507C2.87646 28.4224 6.09616 31.6421 10.0679 31.6421H24.4507C28.4223 31.6421 31.642 28.4224 31.642 24.4507V10.068C31.642 6.09625 28.4223 2.87656 24.4507 2.87656Z" stroke="white" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.0124 16.3532C23.1899 17.5502 22.9854 18.7727 22.4281 19.8468C21.8707 20.9209 20.9889 21.792 19.908 22.336C18.8271 22.8801 17.6022 23.0694 16.4075 22.8772C15.2128 22.6849 14.1091 22.1209 13.2534 21.2652C12.3978 20.4095 11.8337 19.3058 11.6414 18.1111C11.4492 16.9164 11.6386 15.6915 12.1826 14.6106C12.7266 13.5297 13.5977 12.6479 14.6718 12.0905C15.7459 11.5332 16.9684 11.3287 18.1654 11.5062C19.3864 11.6873 20.5167 12.2562 21.3896 13.1291C22.2624 14.0019 22.8313 15.1322 23.0124 16.3532Z" stroke="white" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.1699 9.34882H25.1843" stroke="white" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class='social' width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M33.6238 4.31482C32.2465 5.28634 30.7215 6.0294 29.1076 6.51538C28.2414 5.51939 27.0902 4.81346 25.8097 4.49306C24.5292 4.17266 23.1812 4.25325 21.948 4.72394C20.7148 5.19463 19.6559 6.0327 18.9145 7.12481C18.1731 8.21691 17.7851 9.51036 17.8028 10.8302V12.2685C15.2752 12.334 12.7706 11.7735 10.5121 10.6367C8.25366 9.49993 6.31137 7.82226 4.85825 5.7531C4.85825 5.7531 -0.894869 18.6976 12.0496 24.4507C9.08755 26.4614 5.55892 27.4696 1.98169 27.3273C14.9262 34.5187 30.7473 27.3273 30.7473 10.7871C30.7459 10.3864 30.7074 9.98681 30.6322 9.5933C32.1001 8.14566 33.136 6.31793 33.6238 4.31482Z" stroke="white" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<path d="M0.543457 0H35.0622V34.5187H0.543457V0Z" fill="white"/>
</clipPath>
</defs>
</svg>

        <svg class='social' width="35" height="35"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3465 11.5062C25.6352 11.5062 27.8302 12.4154 29.4486 14.0338C31.067 15.6522 31.9761 17.8472 31.9761 20.1359V30.2039H26.223V20.1359C26.223 19.373 25.92 18.6413 25.3805 18.1019C24.841 17.5624 24.1094 17.2593 23.3465 17.2593C22.5836 17.2593 21.8519 17.5624 21.3124 18.1019C20.773 18.6413 20.4699 19.373 20.4699 20.1359V30.2039H14.7168V20.1359C14.7168 17.8472 15.626 15.6522 17.2444 14.0338C18.8627 12.4154 21.0577 11.5062 23.3465 11.5062V11.5062Z" stroke="white" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.96357 12.9445H3.21045V30.2039H8.96357V12.9445Z" stroke="white" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.08701 8.62967C7.67569 8.62967 8.96357 7.34179 8.96357 5.75311C8.96357 4.16444 7.67569 2.87656 6.08701 2.87656C4.49833 2.87656 3.21045 4.16444 3.21045 5.75311C3.21045 7.34179 4.49833 8.62967 6.08701 8.62967Z" stroke="white" stroke-width="2.87656" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    </div>
  );
}

export default App;
