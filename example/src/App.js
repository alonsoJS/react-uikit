import React, { Fragment } from 'react';
import { Accordion, Alert } from 'react-uikit';
import 'react-uikit/dist/index.css';

const App = () => {
  return (
    <Fragment>
      <Accordion className={"accordion"}>
        <Accordion.Element>
          <Accordion.Title>Hello</Accordion.Title>
          <Accordion.Content>They</Accordion.Content>
        </Accordion.Element>
      </Accordion>
      <Alert>
        <Alert.Close />
        hello
      </Alert>
    </Fragment>
  )
}

export default App
