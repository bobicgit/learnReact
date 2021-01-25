import React, { Component, useState } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import './App.css';

class App extends Component {
  state = { letters: 0, chars: [] };
  countLetters = (event) => {
    const value = event.target.value;
    const newChars = value.split('').map((char,idx) => {
      return {letter: char, id: char+idx};
    });
    this.setState({chars: newChars, letters: value.length})
  };
  deleteLetter = (idx) => {
    console.log('aa');
    const charsCopy = [...this.state.chars];
    charsCopy.splice(idx, 1);
    this.setState({chars: charsCopy, letters: charsCopy.length})
  };
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type='text' onChange={this.countLetters} value={this.state.} />
        <p>{this.state.letters}</p>
        <ValidationComponent length={this.state.letters} />
        {this.state.chars.map((char, idx) => {
          return <CharComponent
          clicked={() => this.deleteLetter(idx)}
          letter={char.letter}
          key={char.id} />
        })}
      </div>
    );
  }
}

export default App;
