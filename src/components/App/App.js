import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    // getUrls()
    //   .then(data => this.setState({urls: data.urls}))
    //   .catch(error => this.setState({error: 'Oh no, something went wrong. Please try again.'}))
    this.refreshUrls()
  }

  addUrl = (newUrl) => {
    postUrl(newUrl)
      .then(data => this.refreshUrls())
      .catch(error => console.log(error))
      // .catch(error => this.setState({error: 'Oh no, something went wrong. Please try again.'}))
  }
  
  refreshUrls = () => {
    getUrls()
      .then(data => this.setState({urls: data.urls}))
      .catch(error => this.setState({error: 'Oh no, something went wrong. Please try again.'}))
    }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
