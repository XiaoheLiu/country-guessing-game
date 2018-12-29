import React, {Component} from 'react';
import FlagQuestion, {QuestionStates} from './FlagQuestion.js';
import shuffle from "shuffle-array";

class CountryGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            options: [],
            correctOption: undefined,
            questionState: undefined
        }

        this.onGuess = this.onGuess.bind(this);
    }

    componentDidMount() {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(countries => {
            const correctOption = Math.floor(Math.random() * countries.length);
            const options = this._getOptions(correctOption, countries);
            this.setState({
                countries,
                correctOption,
                options,
                questionState: QuestionStates.QUESTION
            })
        })
    }

    onGuess(answer) {
        const {correctOption} = this.state;
        let questionState = answer === correctOption ?
                            QuestionStates.ANSWER_CORRECT :
                            QuestionStates.ANSWER_WRONG;
        this.setState({questionState});
    }

    _getOptions(correctOption, countries) {
        let options = [correctOption];
        let count = 0;
        while (options.length < 4 && count < 20) {
            const option = Math.floor(Math.random() * countries.length);
            if (!options.includes(option)) {
                options.push(option);
                count++;
            }
        }
        return shuffle(options);
    }

    render() {
        let {
            countries,
            correctOption,
            options,
            questionState
        } = this.state;
        let output = <div> Loading... </div>;
        if (correctOption !== undefined) {
            const {flag, name} = countries[correctOption];
            let opts = options.map((opt => ({
                id: opt,
                name: countries[opt].name
            })));
            output = (
                <FlagQuestion
                    flag={flag}
                    answerText={name}
                    options={opts}
                    questionState={questionState}
                    onGuess={this.onGuess}
                />
            );
        }

        return (
            <div style={{marginTop: '15px'}}> 
                {output} 
            </div>
        )
    }
}

export default CountryGame;