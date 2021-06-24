import React from 'react'
import ReactDOM from 'react-dom'

const name='Fobzo Sikao';
ReactDOM.render(
  <>
  <h1>{name} Netflix Pick...!!!</h1>
  <h4>top 5 list...</h4>
  <ol>
    <li>  13 Reason Why</li>
    <li>  Little Things</li>
    <li>  Friends</li>
    <li>  The Vempire Dairies</li>
    <li>  Forget {Math.random()}</li>
  </ol>
  </>
  ,document.getElementById('root')
)