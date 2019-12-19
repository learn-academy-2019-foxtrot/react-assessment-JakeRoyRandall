// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* This is calling a component Board which is difined by the Board class on line 21  */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // Here: We are difining the Board class and giving it a constructor function that is run on instantiation
    // of a new Board component. The super() ensures that in inherits the properties of the Component class
    // this.state below sets the default state values for each new Board.
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
      clickCount: 0,
    }
  }

  gamePlay = (index) => {
    // 3) Here: below we are destructuring the variables from state so that
    // you can utilize it inside of the function without saying this.state.gameBoard etc.
    // programmers are lazy I mean DRY
    const { gameBoard, currentPlayer, winner, clickCount } = this.state
    // 4) Here: If the index isn't already filled with an emjoi & no winner has been declared
    // lets change the state to reflect the changes by placing an emoji at the current index
    // and update state by updating gameboard and changing the current player and increasing the click count.
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
        clickCount: clickCount+1
      })
    }
    if(winner === null){
      // 5) Here: calls the winning method of this component when the state of winner is null.
      // The winning function checks to see if anyone has won yet.
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: this is one way, not the only way to reset the state of the Board component
        // never set state directly-- i.e. not using the setState method
        // Another way to write this would be
        // this.setState(state => ({winner: currentPlayer}))
        // https://reactjs.org/docs/state-and-lifecycle.html
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: We define mappedGameBoard which is comprised of returning a square for every index in the gameBoard Array
    // We passed values in as props to each of the Square elements, some bassed on the position of them (index)
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: Pass is the property gamePlay and set it to the function of gamePlay defined above*/}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: Inside of the div we are writing the below and calling the state of currentPlayer.
              Could be written as this.state.currentPlayer, but we used destructuring above.*/}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: Inside of the div we are writing the below and calling the state of winner.
              Could be written as this.state.winner, but we used destructuring above.*/}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: Inside of the div we are calling mappedGameBoard which is what is returned when we mapped over gameBoard above.*/}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: We are defining a function in our square component that calls the props that were passed in when creating mappedGameBoard.
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: we are showing on the screen the props of "value" that was passed in*/}
        { this.props.value }
      </div>
    )
  }
}

export default App
