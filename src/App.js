import React, { Component } from 'react';
import './App.css';
import quotes from './quotes';

const randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
const styles = {
    app: {
        backgroundColor: randomColor,
        height: "100vh"
    },
    box:{
        zIndex: 1000,
        backgroundColor: "white",
        color: randomColor,
        width: 400,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        padding: "40px 50px",
        borderRadius: 2
    }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        quote: '',
        author: '',
    }
  }
  generateRandomQuote  = () => {
      let randomno = Math.floor(Math.random() * 100)
      let { quote, author} = quotes["quotes"][randomno];
      this.setState({
          quote,
          author
      })
  }

  componentDidMount(){
      this.generateRandomQuote();
  }
  handleClick = () => {
      this.generateRandomQuote()
  }
  render() {
      let { quote, author} = this.state;
    return (
      <div style={styles.app}>
        <div id="quote-box">
            <div style={styles.box}>
                <div style={{
                    clear: "both",
                    fontWeight: 500,
                    fontSize: "1.75em",
                    textAlign: "center"
                }}>
                    <i className="fas fa-quote-left" ></i> {quote}
                </div>
                <div>- {author}</div>
                <div>
                    <a target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`} style={{
                        height: 20,
                        width: 20
                    }}>Tweet</a>
                    <button onClick={this.handleClick}>New Quote</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
