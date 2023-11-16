import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card-feature-card">
        <svg viewBox="0 0 731.4285714285713 1024" className="feature-card-icon">
          <path d="M658.286 146.286h-585.143v709.714l292.571-280.571 50.857 48.571 241.714 232v-709.714zM665.143 73.143c8.571 0 17.143 1.714 25.143 5.143 25.143 9.714 41.143 33.143 41.143 58.857v736.571c0 25.714-16 49.143-41.143 58.857-8 3.429-16.571 4.571-25.143 4.571-17.714 0-34.286-6.286-47.429-18.286l-252-242.286-252 242.286c-13.143 12-29.714 18.857-47.429 18.857-8.571 0-17.143-1.714-25.143-5.143-25.143-9.714-41.143-33.143-41.143-58.857v-736.571c0-25.714 16-49.143 41.143-58.857 8-3.429 16.571-5.143 25.143-5.143h598.857z"></path>
        </svg>
        <div className="feature-card-container">
          <h3 className="feature-card-text heading3">{props.Heading}</h3>
          <span className="feature-card-text1">{props.SubHeading}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .feature-card-icon {
            fill: var(--dl-color-primary1-blue80);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .feature-card-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card-text {
            font-family: 'Raleway';
            font-weight: 600;
            line-height: 28px;
          }
          .feature-card-text1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          @media (max-width: 767px) {
            .feature-card-feature-card {
              flex-direction: row;
            }
            .feature-card-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  Heading: 'Lorem ipsum',
  SubHeading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
}

FeatureCard.propTypes = {
  Heading: PropTypes.string,
  SubHeading: PropTypes.string,
}

export default FeatureCard
