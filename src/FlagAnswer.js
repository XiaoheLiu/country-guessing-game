import React from 'react';
import StyledButton from './StyledButton.js';
import './FlagAnswer.css';

const FlagAnswer = ({correct, answer}) => (
    <div className="flag-answer">
        {correct ? 
            `Correct! This is the flag of ${answer}.` :
            `Incorrect! This is the flag of ${answer}.`
        }
    </div>
);

export default FlagAnswer;