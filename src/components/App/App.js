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
    getUrls()
      .then(data => this.setState({urls: data.urls}))
      .catch(error => this.setState({error: 'Oh no, something went wrong. Please try again.'}))
  }

  addUrl = (newUrl) => {
    postUrl(newUrl)
      .then(data => this.setState({urls: [...this.state.urls, data]}))
      .catch(error => this.setState({error: 'Oh no, something went wrong. Please try again.'}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1 className='app-name'>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} />
        </header>
        {!this.state.error &&
        <UrlContainer urls={this.state.urls}/> 
        }
        {this.state.error && <h2>{this.state.error}</h2>}
      </main>
    );
  }
}

export default App;
