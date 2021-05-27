import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


function Anecdote(){
  const [selected,setSelected]=useState(0)
  const [votes,setVotes]=useState(
    new Array(anecdotes.length).fill(0)

  )

  function Randomanecdote(){
    var x= Math.floor(Math.random() * 6);
    setSelected(x) 
  }
  function Vote(){
    const x=[...votes]
    x[selected]+=1
    setVotes(x)
  }
  function Max(){
    var x=0;
    var index=0
    votes.forEach((value, i) => {
      if (x < value) {
        x = value
        index = i
      }
    })
    return index;
  }
  const max=Max();
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p><br></br>
      <p> has {votes[selected]}</p>
      <button onClick={Randomanecdote}>next</button>
      <button onClick={Vote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
      <p>{votes[max]}</p>
    </div>
  )





}
  

ReactDOM.render(
 <Anecdote></Anecdote>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
