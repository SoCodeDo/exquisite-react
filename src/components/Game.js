import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

const Game = () => {
  const [poemList, setPoemsList] = useState([]);
  const [index, setIndex] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join('');

  const addPoem = (newPoem) => {
    setIndex(index + 1);
    setPoemsList([...poemList, newPoem]);
  };

  const revealPoem = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission submission={!isSubmitted && poemList.length !== 0 ? poemList[poemList.length - 1] : ''}/>

      <PlayerSubmissionForm fields={FIELDS} sendSubmission={addPoem} index={index} isSubmitted={isSubmitted}/>

      <FinalPoem submissions={poemList} isSubmitted={isSubmitted} revealPoem={revealPoem}/>
    </div>
  );
}

export default Game;