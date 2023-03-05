/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import SpeechSynthesisExample from './useSpeechSynthesis';
import SpeechRecognitionExample from './useSpeechRecognition';
import { GlobalStyles, Row, GitLink, Title } from './shared';
import gh from './images/github.png';

const App = () => (
  <div>
    <GlobalStyles />
    <Title>
      {"Doctor's personal assistant tool "}
      <span role="img" aria-label="microphone">
        🎤
      </span>
    </Title>
    <Row>
      <SpeechSynthesisExample />
      <SpeechRecognitionExample />
    </Row>
    <GitLink>
      {/* <img alt="Github" src={gh} /> */}
      <a href="#">
        Powered By Medaid
      </a>
    </GitLink>
  </div>
);

render(<App />, document.getElementById('root'));
