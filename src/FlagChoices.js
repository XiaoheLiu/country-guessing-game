import React from 'react';
import StyledButton from './StyledButton';
import "./FlagChoices.css"

const FlagChoices = props => {
    let options = props.options || [];
    let choices = options.map(opt => (
        <label key={opt.id}>
          <input type="radio"
                 value={opt.id}
                 name="flag-choice" />
          {opt.name}
        </label>
      ));

    return (
        <form className="flag-form"> 
            {choices}
            <StyledButton text="GUESS" type="submit" />
        </form>
    )
}

export default FlagChoices;