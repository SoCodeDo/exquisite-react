import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  return (
    const PlayerSubmissionForm = (props) => {
      const [poem, setPoem] = useState({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    
      const onUserInputChange = (event) => {
        const { name, value } = event.target;
    
        const newPoem = {
          ...poem,
        };
    
        newPoem[name] = value;
        setPoem(newPoem);
      };
    
      // const onNoun1Change = (event) => {
      //   const newPoem = {
      //     ...poem,
      //     noun1: event.target.value,
      //   };
    
      //   setPoem(newPoem);
      // };
    
      // const onAdverbChange = (event) => {
      //   const newPoem = {
      //     ...poem,
      //     adverb: event.target.value,
      //   };
    
      //   setPoem(newPoem);
      // };
    
      // const onVerbChange = (event) => {
      //   const newPoem = {
      //     ...poem,
      //     verb: event.target.value,
      //   };
    
      //   setPoem(newPoem);
      // };
    
      // const onAdjective2Change = (event) => {
      //   const newPoem = {
      //     ...poem,
      //     adjective2: event.target.value,
      //   };
    
      //   setPoem(newPoem);
      // };
    
      // const onNoun2Change = (event) => {
      //   const newPoem = {
      //     ...poem,
      //     noun2: event.target.value,
      //   };
    
      //   setPoem(newPoem);
      // };
    
      const onFormSubmit = (event) => {
        event.preventDefault();
    
        if (
          poem.adj1 !== '' &&
          poem.noun1 !== '' &&
          poem.adv !== '' &&
          poem.verb !== '' &&
          poem.adj2 !== '' &&
          poem.noun2 !== ''
        ) {
          props.onSubmitCallBack(poem);

          setPoem({
            adj1: '',
            noun1: '',
            adv: '',
            verb: '',
            adj2: '',
            noun2: '',
          });
        }
      };

      const main = props.fields.map((obj) => {
        const userInput = poem[obj.key];
    
        if (obj.key) {
          return (
            <input
              name={obj.key}
              placeholder={obj.placeholder}
              type='text'
              key={obj.key}
              value={userInput}
              onChange={onUserInputChange}
            />
          );
        } else {
          return obj;
        }
      });
      console.log(main);

      return (
        <div className='PlayerSubmissionForm'>
          <h3>Player Submission Form for Player #{props.player}</h3>
    
          <form onSubmit={onFormSubmit} className='PlayerSubmissionForm__form'>
            <div className='PlayerSubmissionForm__poem-inputs'>

           {main}
          {/* <label htmlFor='The'>The</label> */}

 {/* <input

  placeholder='adjective'
  type='text'
  value={poem.adjective1}
  onChange={onAdjective1Change}
  

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

 <label htmlFor='period'>.</label>*/}

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
