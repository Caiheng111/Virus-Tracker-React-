import React, { Component } from 'react'
import {Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api/index'


class App extends Component {
  state ={
    data:{},
    country:""
  }

  async componentDidMount(){
    const fetchedData= await fetchData();
    this.setState({data:fetchedData})
  
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }



  render() {
    return (
    <div className={styles.container}>
      <Cards data={this.state.data}/>
      <Charts/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
    </div>
    )
  }
}

export default App;







