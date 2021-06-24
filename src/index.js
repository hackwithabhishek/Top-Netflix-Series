import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';


ReactDOM.render(
  <>
  <h1 class='Heading_style'>Top Netflix Series</h1>
  {Sdata.map( (val) => {
      return(
      <Card
      imgsrc={val.imgsrc}
      sname={val.sname}
      title={val.title}
      link={val.link}
      />
      );
  })}
  </>
  ,document.getElementById('root')
)