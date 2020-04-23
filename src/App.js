import React, { Component } from 'react'
import {Cards, Charts, CountryPicker} from './components'
import style from './App.module.css'
import {fetchData} from './api/index'


class App extends Component {

  async componentDidMount(){
    const data= await fetchData();
    console.log(data);
    
  }
  render() {
    return (
      <div className={style.container}>
      <Cards/>
      <Charts/>
      <CountryPicker/>
    </div>
    )
  }
}

export default App;







