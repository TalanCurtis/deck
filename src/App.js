import React, { Component } from 'react';
import './styles/main.css';
import axios from 'axios';
import Card from './components/Card/Card';

class App extends Component {
  constructor(){
    super();
    this.state={
      deckId:'',
      spades:[],
      hearts:[],
      clubs:[],
      diamonds:[],
      queensFound:0
    }
  }
  componentDidMount(){
    // On mount get deck id.
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(res=>{
      this.setState({deckId:res.data.deck_id})
    })
  }

  drawTwo(){
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`).then(res=>{
      // Destructure this.state 
      let {clubs,  spades,  hearts, diamonds, queensFound} = this.state
      for (let i in res.data.cards){
        console.log(res.data.cards)
        // for each card drawn check the suit and if its a queen, sort into corresponding list and increment queensFound.
        switch (res.data.cards[i].suit) {
          case "CLUBS": 
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({clubs: [...clubs, res.data.cards[i]], queensFound: queensFound +=1 })
          }else{
            this.setState({clubs: [...clubs, res.data.cards[i]]})
          }
            break;
          case "DIAMONDS": 
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({diamonds: [...diamonds, res.data.cards[i]], queensFound: queensFound +=1 })
          }else{
            this.setState({diamonds: [...diamonds, res.data.cards[i]]})
          }
            break;
          case "SPADES": 
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({spades: [...spades, res.data.cards[i]], queensFound: queensFound +=1 })
          }else{
            this.setState({spades: [...spades, res.data.cards[i]]})
          }
            break;
          case "HEARTS":
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({hearts: [...hearts, res.data.cards[i]], queensFound: queensFound +=1 })
          }else{
            this.setState({hearts: [...hearts, res.data.cards[i]]})
          }
            break;
          default: console.log('defaulted')
            break;
        }
      }
    })
  }

  start(){
    // Use recursion to keep drawing cards until all queens are found.
    setTimeout(() => {
      if(this.state.queensFound<4){
        console.log('draw again')
        this.drawTwo();
        return this.start();
      }else{
        console.log('Done')
      }
    }, 1000);
  }

  reset(){
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/shuffle/`);
    this.setState(
      {
        spades:[],
        hearts:[],
        clubs:[],
        diamonds:[],
        queensFound:0
      });
  }



  render() {
    let hearts = this.state.hearts.map((x,i)=>(
      <Card key={i} image={x.image}/>
    ))
    let clubs = this.state.clubs.map((x,i)=>(
      <Card key={i} image={x.image}/>
    ))
    let diamonds = this.state.diamonds.map((x,i)=>(
      <Card key={i} image={x.image}/>
    ))
    let spades = this.state.spades.map((x,i)=>(
      <Card key={i} image={x.image}/>
    ))

    return (
      <div className="App">
        <div className='table'>
          <div className='controls'>
            <div className='buttons'>
              <button onClick={()=>this.start()}>start</button>
              <button onClick={()=>this.reset()}>reset</button>
            </div>
            <button onClick={()=>this.drawTwo()}>drawtwo</button>
            <img src='/images/CardBack.png' alt='deck'/>
          </div>
          <div>
            hearts
          {hearts}
          </div>
          <div>
            clubs
          {clubs}
          </div>
          <div>
            diamonds
          {diamonds}
          </div>
          <div>
            spades
          {spades}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
