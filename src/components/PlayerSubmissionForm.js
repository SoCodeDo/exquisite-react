import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  return (
    const PlayerSubmissionForm = (props) => {
      const [poem, setPoem] = useState({
        adjective1: '',
        noun1: '',
        adverb: '',
        verb: '',
        adjective2: '',
        noun2: '',
      });
    
      // const onUserInputChange = (event) => {
      //   const newPoem = {
      //     ...poem,
      //   };
    
      //   newPoem[event.target.name]=[event.target.value];
      //   setPoem(newPoem);
      // };
    
      const onAdjective1Change = (event) => {
        const newPoem = {
          ...poem,
          adjective1: event.target.value,
        };
    
        setPoem(newPoem);
      };
    
      const onNoun1Change = (event) => {
        const newPoem = {
          ...poem,
          noun1: event.target.value,
        };
    
        setPoem(newPoem);
      };
    
      const onAdverbChange = (event) => {
        const newPoem = {
          ...poem,
          adverb: event.target.value,
        };
    
        setPoem(newPoem);
      };
    
      const onVerbChange = (event) => {
        const newPoem = {
          ...poem,
          verb: event.target.value,
        };
    
        setPoem(newPoem);
      };
    
      const onAdjective2Change = (event) => {
        const newPoem = {
          ...poem,
          adjective2: event.target.value,
        };
    
        setPoem(newPoem);
      };
    
      const onNoun2Change = (event) => {
        const newPoem = {
          ...poem,
          noun2: event.target.value,
        };
    
        setPoem(newPoem);
      };
    
      const onFormSubmit = (event) => {
        event.preventDefault();
    
        if (
          poem.adjective1 !== '' &&
          poem.noun1 !== '' &&
          poem.adverb !== '' &&
          poem.verb !== '' &&
          poem.adjective2 !== '' &&
          poem.noun2 !== ''
        ) {
          props.onSubmitCallBack(poem);

          setPoem({
            adjective1: '',
            noun1: '',
            adverb: '',
            verb: '',
            adjective2: '',
            noun2: '',
          });
        }
      };

      return (
        <div className='PlayerSubmissionForm'>
          <h3>Player Submission Form for Player #{props.player}</h3>
    
          <form onSubmit={onFormSubmit} className='PlayerSubmissionForm__form'>
            <div className='PlayerSubmissionForm__poem-inputs'>

          {
            // Put your form inputs here... We've put in one below as an example
          }

<label htmlFor='The'>The</label>

<input
  placeholder='adjective'
  type='text'
  onChange={onAdjective1Change}
  value={poem.adjective1}

/>

<input
  placeholder='noun'
  type='text'
  value={poem.noun1}
  onChange={onNoun1Change}
/>

<input
  placeholder='adverb'
  type='text'
  value={poem.adverb}
  onChange={onAdverbChange}
/>

<input
  placeholder='verb'
  type='text'
  value={poem.verb}
  onChange={onVerbChange}
/>

<label htmlFor='the'>the</label>

<input
  placeholder='adjective'
  type='text'
  value={poem.adjective2}
  onChange={onAdjective2Change}
/>

<input
  placeholder='noun'
  type='text'
  value={poem.noun2}
  onChange={onNoun2Change}
/>

<label htmlFor='period'>.</label>

</div>

        <div className='PlayerSubmissionForm__submit'>
          <input
            type='submit'
            value='Submit Line'
            className='PlayerSubmissionForm__submit-btn'
          />
        </div>
      </form>
    </div>
  );
};

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
