import React from "react"
import { Link } from "gatsby";
import Header from "../components/header.js";
import Layout from "../components/layout";
import Main from "../components/main.js";
import Remainder from "../components/remainder.js";
import ImageRow from "../components/imagerow.js";
import Card from "../components/card.js";
import mord from "../../static/mord-pretty.png";
import rutta from "../../static/rutta-large-pretty.png";
import aspi from "../../static/aspi-large-pretty.png";

import ReactFullpage from '@fullpage/react-fullpage'
const fullpageOptions = {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage'],
    menu: "#myMenu",
     navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Landing page', 'Projects', 'More projects', 'Technology'],
    callbacks: ['onLeave', 'afterLoad'],
}

const FullpageWrapper = fullpageProps => (
    <Layout>
    <Remainder>
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state) // eslint-disable-line no-console

      if (state.callback === 'onLeave') {
        if (state.direction === 'down') {
            console.log('going down...' + state.origin.index)
        }
      }
      return (
        <div id="fullpage-wrapper">
          <div className="section section1">
          <Main>
            <div style={{fontFamily: "Tangerine, serif",  fontSize: "84px", padding: "0 24px 0 24px", borderBottom: "1px solid #393e46"}}> 
                <h1 style={{display: "block", margin:"0"}}>
                    <span>Hello, </span>
                    <span style={{display: "flex" }}>
                        I'm&nbsp;<span style={{color: '#00adb5'}}>Thomas</span>
                    </span>
                </h1>
            </div>
          </Main>
          </div>
          <div className="section section2">
            <div style={{display: "flex", justifyContent: "center", alignContent: "center", alignText: "center"}}>
            <Header headerText="Projects"/>
          </div>
          <Main>
            <div>
            <ImageRow 
                    imageLeft={true} 
                    image={mord}
                    url="https://www.github.com/mrlys/mord.git"
                    name="Mord"
                    title="The dimwitted turnkey" 
                    tech="Python"
                    desc="A simple, not really secure terminal based password manager"
                    additional="https://asciinema.org/a/314671"
                    additionalText="A small demonstration"
          />  
            <ImageRow 
                    imageLeft={false} 
                    image={rutta}
                    url="https://www.github.com/mrlys/vicissitudes.git"
                    name="Rutta"
                    title="The overengineered habit tracker" 
                    tech="Clojure, Gridsome, Postgres, CircleCI"
                    desc="A functional habit tracker used mainly as a project to learn Clojure"/>  
          </div>
          </Main>
          </div>
          <div className="section section3">
            <div style={{display: "flex", justifyContent: "center", alignContent: "center", alignText: "center"}}>
                <Header headerText="Projects"/>
          </div>
            <Main>
            <div>
            <ImageRow 
                    imageLeft={true} 
                    image={aspi}
                    url="https://www.github.com/mrlys/aspi.git"
                    name="Aspi"
                    title="The motivational service" 
                    tech="Clojure, Heroku, Google CSE API"
                    desc="Created during a hackathon where we needed a service for fetching daily images of the Norwegian singer Astrid Smeplass for a Grafana board, fittingly coined 'our motivational service'."
            />  
          </div>
          </Main>
          </div>
          <div className="section section4">
            <div style={{display: "flex", justifyContent: "center", alignContent: "center", alignText: "center"}}>
                <Header headerText="About me"/>
          </div>
            <Main>
                <section style={{marginTop: "28px"}}>
                <Card ingress="Thomas, 26, Norwegian." text="I'm highly enthusiastic about challenges, programming, coffee, dogs and gin."/>

            <div style={{display: "flex", justifyContent: "center", alignContent: "center", alignText: "center", marginTop: "14 px"}}>
               <Card name="Java"/>  
               <Card name="Clojure"/>  
               <Card name="JavaScript"/>  
               <Card name="Python"/>  
               <Card name="Postgres"/>  
          </div>
          </section>
          </Main>
          </div>
        </div>
      )
    }}
  />
    </Remainder>
    </Layout>
)
/**
    <ul id="myMenu">
	<li data-menuanchor="firstPage" className="active"><a href="#firstPage"></a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage"></a></li>
	<li data-menuanchor="thirdPage"><a href="#thirdPage"></a></li>
    </ul>
    **/
export default FullpageWrapper
