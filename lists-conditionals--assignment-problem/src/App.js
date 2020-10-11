import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent"
import CharComponent from "./CharComponent"

class App extends Component {
  state = {
    length:0,
    text:''
  }
  render() {
    let count = 0
    let wordArray = []
    // let newWord = ''  
    const handleChangeListener = (event) => {
      this.setState({
        text:event.target.value,
        length:event.target.value.length        
      })
    }
    const deleteCharHandler = (charIndex) => {
      const newText = [...this.state.text.split('')]
      newText.splice(charIndex, 1)
      // this.setState({text: newText})
      console.log(newText.join(''))
      this.setState({text:newText.join('')})
    }

    // const validateLength = (inputLength) => {
    //   if(inputLength < 5){
    //     return "Text too short"
    //   } 
    //   return "Text long enough"
    // }
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

        <input 
          name="Message"
          placeholder="Enter your message here"
          onChange={handleChangeListener}
          value={this.state.text}
        />
        <p>{this.state.length}</p> 
        <ValidationComponent length={this.state.length} />
        {
          this.state.text.split('').map((c,index)=>{
            count +=1
            wordArray.push(c)
            return <CharComponent key = {count} char={c} clicked={() => deleteCharHandler(index)} />
          })
        }
        {/* {newWord =wordArray.join('')} */}
        {/* <div>{validateLength(this.state.length)}</div> */}
      </div>
    );
  }
}

export default App;
