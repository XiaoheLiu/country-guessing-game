import React, {Component} from 'react';
import FlagQuestion, {QuestionStates} from './FlagQuestion.js';

class CountryGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            options: [],
            correctOption: undefined,
            questionState: undefined
        }
    }

    componentDidMount() {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(countries => {
            const correctOption = Math.floor(Math.random() * countries.length);
            this.setState({
                countries,
                correctOption,
                questionState: QuestionStates.QUESTION
            })
        })
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
            output = (
                <FlagQuestion
                    flag={flag}
                    answerText={name}
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