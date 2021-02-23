import React from "react";
import cx from 'classnames';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Answer(props) {

  const cn = cx('pointer');

  const answer = props.answers.map((ans, i) => <ListGroup.Item key={i} className={cn} onClick={props.onAnswer} >{ans}</ListGroup.Item>);

  return (<ListGroup>{answer}</ListGroup>);
}
