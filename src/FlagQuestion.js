import React, {Component} from 'react';
// import FlagChoices from './FlagChoices';
// import FlagAnswer from './FlagAnswer';
import './FlagQuestion.css';
import FlagChoices from './FlagChoices';

const QuestionStates = {
    QUESTION: 1,
    ANSWER_WRONG: 2,
    ANSWER_CORRECT: 3
};

class FlagQuestion extends Component {
    static defaultProps = {
        options: []
    }

    constructor(props) {
        super(props);
        this.state = {
            userChoice: undefined
        }
    }

    render() {
        const {
            flag,
            // questionState,
            options,
            answerText,
            // onText
        } = this.props;

        let output = (
            <FlagChoices options={options}/>
        );
        return (
            <div>
                <h1>{answerText}</h1>
                {output}
                <img
                    className="flag-img"
                    src={flag}
                    alt="Guess the flag"
                />
            </div>
        )
    }
}

export default FlagQuestion;
export { QuestionStates };