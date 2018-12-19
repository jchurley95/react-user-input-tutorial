import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    exampleString: "Edit me",
    firstAndLastName: {
      firstName: "",
      lastName: ""
    },
    buttonClickValue: false,
    radioValue: "Red",
    isRobot: false,
    isSure: false,
    yearsOfExperience: 0,
    typeOfRobot: "good"
  }

  handleRegularInputChange = (event) => {
    console.log(event.target.name, event.target.value)
  }

  updateFirstAndLastName = (event) => {
    console.log(event.target.name, event.target.value)
  }

  handleClickingButton = () => {

  }

  handleRadioChange = (event) => {
    console.log(event.target.name, event.target.value)
  }

  handleCheckboxChange = (event) => {
    console.log(event.target.name, event.target.checked)
  }

  handleNumberChange = (event) => {
    console.log(event.target.name, event.target.value)
  }

  handleSelectChange = (event) => {
    console.log(event.target.name, event.target.value)
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Handling User Input With React</h1>
          <h2>Basic user text input</h2>
          <input type="text" name="exampleString" onChange={this.handleRegularInputChange} placeholder="Edit me"/>
          <div className="codeBlock">
            <h4>this.state {'{'}</h4>
            <h4 className="indent">exampleString: "{this.state.exampleString}",</h4>
            <h4>{'}'}</h4>
          </div>
        </div>

        <div>
          <h2>Updating an object within state</h2>
          <label>First Name:</label>
          <input type="text" name="firstName" onChange={this.updateFirstAndLastName} placeholder="Enter first name"/>
          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={this.updateFirstAndLastName} placeholder="Enter last name"/>
          <div className="codeBlock">
            <h4>this.state.firstAndLastName {'{'}</h4>
            <h4 className="indent">firstName: "{this.state.firstAndLastName.firstName}",</h4>
            <h4 className="indent">lastName: "{this.state.firstAndLastName.lastName}"</h4>
            <h4>{'}'}</h4>
          </div>
        </div>

        <div>
          <h2>Capturing user clicking</h2>
          <button onClick={this.handleClickingButton}>Click Me</button>
          <div className="codeBlock">
            <h4>this.state {'{'}</h4>
            <h4 className="indent">buttonClickValue: {this.state.buttonClickValue.toString()}</h4>
            <h4>{'}'}</h4>
          </div>
        </div>

        <div>
          <h2>Number input</h2>
          <label>How many years have you been writing code?</label>
          <input
            name="yearsOfExperience"
            type="number"
            value={this.state.yearsOfExperience}
            onChange={this.handleNumberChange} 
          />
          <div className="codeBlock">
            <h4>this.state {'{'}</h4>
            <h4 className="indent">yearsOfExperience: {this.state.yearsOfExperience}</h4>
            <h4>{'}'}</h4>
          </div>
        </div>

        <div>
          <h2>Radio input</h2>
          <label>
            <input type="radio" name="radioValue" value="Red" checked={this.state.radioValue === "Red"} onChange={this.handleRadioChange}/>
            Red
          </label>
          <label>
            <input type="radio" name="radioValue" value="Green" checked={this.state.radioValue === "Green"} onChange={this.handleRadioChange}/>
            Green
          </label>
          <label>
            <input type="radio" name="radioValue" value="Blue" checked={this.state.radioValue === "Blue"} onChange={this.handleRadioChange}/>
            Blue
          </label>
          <div className="codeBlock">
            <h4>this.state {'{'}</h4>
            <h4 className="indent">radioValue: "{this.state.radioValue}"</h4>
            <h4>{'}'}</h4>
          </div>
        </div>

        <div>
          <h2>Checkbox input</h2>
          <label>Are you a robot?</label>
          <input
            name="isRobot"
            type="checkbox"
            checked={this.state.isRobot}
            onChange={this.handleCheckboxChange} 
          />
          <br />
          {
            this.state.isRobot
            ?
            <div>
              <label>Are you sure?</label>
              <input type="checkbox" 
                name="isSure"
                type="checkbox"
                checked={this.state.isSure}
                onChange={this.handleCheckboxChange}
              />
            </div>
            :
            null
          }
          
          <div className="codeBlock">
            <h4>this.state {'{'}</h4>
            <h4 className="indent">isRobot: {this.state.isRobot.toString()},</h4>
            <h4 className="indent">isSure: {this.state.isSure.toString()}</h4>
            <h4>{'}'}</h4>
          </div>
        </div>

        <div>
          <h2>Selection input</h2>
          <label>What type of robot are you?</label>
          <select value={this.state.typeOfRobot} onChange={this.handleSelectChange} name="typeOfRobot">
            <option value="good">Good</option>
            <option value="evil">Evil</option>
            <option value="jedi master">Only a Sith deals in absolutes</option>
          </select>
          <div className="codeBlock">
            <h4>this.state {'{'}</h4>
            <h4 className="indent">typeOfRobot: "{this.state.typeOfRobot}"</h4>
            <h4>{'}'}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
