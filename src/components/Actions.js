import React from 'react';
import Button from 'react-bootstrap/Button'

export default function Actions(props) {
  return <Button variant="success" className="mt-1" onClick={props.nextQuestion}>Next</Button>;
}