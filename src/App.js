import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  
  state = {
    isShowing : true,
    posts : [
      {
        title : "My first Fam blog post.",
        content : "I love Fam!!!  It's Lit!!!",
        user : "TheOne614"
      },
      {
        title: "Pandas are fun!",
        content:  "They are funny as hell",
        user: "CWill833"
      }
    ]

  }
   
  handleClick = event => {
    this.setState({
      isShowing : !this.state.isShowing
    })
  }
  render() {
    
    const title = <h1>Fam Blog!</h1>
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <li key={index} className='post'>
          <h3 className='postTitles'>{item.title}</h3>
          <p>{item.content}</p>
          <h6>{item.user}</h6>
        </li>
      )
    })
    return (
    <div className="App container">
      <Nav />
        {this.state.isShowing ? title : null}
        <ul>{composedPosts}
        </ul>
        <button className="button-primary" onClick={this.handleClick}>Add a damn post!</button>
      <Footer />
    </div>
  );
}}
export default App;