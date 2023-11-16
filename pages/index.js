import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Rhema Journal</title>
          <meta property="og:title" content="Rhema Journal" />
        </Head>
        <div className="home-header">
          <span className="home-logo">Rhema Journal</span>
        </div>
        <div className="home-hero">
          <div className="home-hero1">
            <div className="home-container1">
              <h1 className="home-hero-heading heading1">
                What is God speaking?
              </h1>
              <span className="home-hero-sub-heading">
                Pray through His written Word to hear His spoken word
              </span>
              <div className="home-btn-group">
                <a
                  href="https://testflight.apple.com/join/Fg8mhlTe"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link button"
                >
                  Join the Beta
                </a>
                <a href="#details" className="home-link1 button">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-details">
          <div id="details" className="home-details1">
            <div className="home-container2">
              <h2 className="home-details-heading heading2">
                <span>ῥῆμα (rhêma) n :</span>
                <br></br>
                <span>word, statement, or utterance</span>
              </h2>
              <span className="home-details-sub-heading">
                Track your Bible reading to form a rhythm of waiting on God to
                reveal what He is speaking to you through His word.
              </span>
            </div>
            <img
              alt="image"
              src="/external/untitled.svg"
              className="home-details-image"
            />
          </div>
        </div>
        <div className="home-features">
          <div className="home-features-container">
            <div className="home-features1">
              <div className="home-container3">
                <h2 className="home-features-heading heading2">
                  Journal Simply
                </h2>
              </div>
              <div className="home-container4">
                <FeatureCard
                  Heading="Daily Journal Entries"
                  SubHeading="Read a new passage from the Bible every day to deepen your understanding and strengthen your faith"
                ></FeatureCard>
                <FeatureCard
                  Heading="Journal Templates"
                  SubHeading="Use common frameworks to guide your prayer and reading"
                ></FeatureCard>
                <FeatureCard
                  Heading="No Notifications"
                  SubHeading="Direct your attention toward God, embrace simplicity, and eliminate hurry with an app that demands nothing"
                ></FeatureCard>
                <FeatureCard
                  Heading="No Cost"
                  SubHeading="This digital journal is free forever"
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-banner-heading heading2">Rhema Journal</h1>
            <span className="home-banner-sub-heading">
              Record the Word of God spoken through Scripture
            </span>
            <button className="home-hero-button1 button">
              Join TestFlight Beta
            </button>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container5">
              <span className="home-text3">
                © 2023 Archa Solutions, All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #fdf5d3;
          }
          .home-logo {
            color: #000000;
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: capitalize;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            border-color: #414141;
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: rgb(0, 0, 0);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-hero-sub-heading {
            color: rgb(0, 0, 0);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            color: #414141;
            font-size: 18px;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: #fdeba0;
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: #fdf5d3;
          }
          .home-link1 {
            color: #414141;
            transition: 0.3s;
            font-weight: bold;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: transparent;
          }
          .home-link1:hover {
            border-color: var(--dl-color-gray-white);
          }
          .home-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-details1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-details-heading {
            width: 637px;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-details-image {
            width: 400px;
            height: 400px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            background-color: #414141;
          }
          .home-container3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            color: #ffffff;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container4 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            border-color: #bbbbbb;
            border-width: 1px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
            background-color: #414141;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .home-hero-button1 {
            color: #373737;
            font-size: 18px;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: #fdeba0;
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: #fdf5d3;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #414141;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text3 {
            color: var(--dl-color-secondary-gray500);
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-details-image {
              width: 207px;
              height: 207px;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container2 {
              align-items: center;
              justify-content: flex-start;
            }
            .home-details-heading {
              text-align: center;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container4 {
              grid-template-columns: 1fr;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-logo {
              font-size: 1.5em;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              border-color: #414141;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-link {
              color: rgb(65, 65, 65);
              font-size: 18px;
              font-weight: bold;
              background-color: rgb(253, 245, 211);
            }
            .home-link1 {
              color: rgb(65, 65, 65);
              margin-top: var(--dl-space-space-unit);
              font-weight: bold;
              margin-left: 0px;
              border-color: rgba(0, 0, 0, 0);
              background-color: transparent;
            }
            .home-container2 {
              width: 479px;
            }
            .home-details-heading {
              width: 479px;
            }
            .home-details-sub-heading {
              width: 100%;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text3 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
