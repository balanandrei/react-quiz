import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is your name?',
					choices: [
						{
							id: 'a',
							text: 'Michael'
						},
						{
							id: 'b',
							text: 'Andrei'
						},
						{
							id: 'c',
							text: 'Balan'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'What is your mothers name?',
					choices: [
						{
							id: 'a',
							text: 'Sara'
						},
						{
							id: 'b',
							text: 'Andrei'
						},
						{
							id: 'c',
							text: 'Balan'
						}
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'What is your fathers name?',
					choices: [
						{
							id: 'a',
							text: 'Michael'
						},
						{
							id: 'b',
							text: 'Andrei'
						},
						{
							id: 'c',
							text: 'Balan'
						}
					],
					correct: 'c'
				},
				{
					id: 4,
					text: 'What is your friends name?',
					choices: [
						{
							id: 'a',
							text: 'Vadim'
						},
						{
							id: 'b',
							text: 'Andrei'
						},
						{
							id: 'c',
							text: 'Balan'
						}
					],
					correct: 'a'
				},
			],
			score: 0,
			current: 1
		}
	}
	setCurrent(current) {
		this.setState({current});
	}

	setScore(score) {
		this.setState({score});
	}

	render() {
		if(this.state.current > this.state.questions.length){
			var scorebox = '';
			var results = <Results {...this.state} />;
		} else {
			var scorebox = <Scorebox {...this.state} />;
			var results = <Results {...this.state} />;
		}
		return(
				<div>
					{scorebox}
					<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
					{results}
				</div>
			)
	}
}

export default App