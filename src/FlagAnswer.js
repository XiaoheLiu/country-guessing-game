import React from 'react';
import StyledButton from './StyledButton.js';
import './FlagAnswer.css';

const FlagAnswer = ({correct, answer, onNext}) => (
    <div className="flag-answer">
        {correct ? 
            `Correct! This is the flag of ${answer}.` :
            `Incorrect! This is the flag of ${answer}.`
        }
        <StyledButton text="NEW GAME" onClick={onNext} />
    </div>
);

export default FlagAnswer;