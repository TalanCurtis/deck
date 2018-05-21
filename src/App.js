import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      deckId:'',
      spades:[],
      spadesQueen:false,
      hearts:[],
      heartsQueen:false,
      clubs:[],
      clubsQueen:false,
      diamonds:[],
      diamondsQueen:false
    }
  }
  componentDidMount(){
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(res=>{
      console.log(res.data)
      this.setState({deckId:res.data.deck_id})
    })
  }



  drawTwo(){
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`).then(res=>{
      // Destructure this.state 
      const {clubs, clubsQueen, spades, spadesQueen, hearts, heartsQueen, diamonds, diamondsQueen} = this.state
      for (let i in res.data.cards){
        switch (res.data.cards[i].suit) {
          case "CLUBS": 
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({clubs: [...clubs, res.data.cards[i]], clubsQueen:true})
          }else{
            this.setState({clubs: [...clubs, res.data.cards[i]]})
          }
            break;
          case "DIAMONDS": 
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({diamonds: [...diamonds, res.data.cards[i]], diamondsQueen:true})
          }else{
            this.setState({diamonds: [...diamonds, res.data.cards[i]]})
          }
            break;
          case "SPADES": 
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({spades: [...spades, res.data.cards[i]], spadesQueen:true})
          }else{
            this.setState({spades: [...spades, res.data.cards[i]]})
          }
            break;
          case "HEARTS":
          if(res.data.cards[i].value === "QUEEN"){
            this.setState({hearts: [...hearts, res.data.cards[i]], heartsQueen:true})
          }else{
            this.setState({hearts: [...hearts, res.data.cards[i]]})
          }
            break;
          default: console.log('defaulted')
            break;
        }
      }

      if(clubsQueen && spadesQueen && diamondsQueen && heartsQueen){
        console.log('true')
      }else{
        console.log('false')
      }
    })
  }

  start(){
    console.log('start')
    const {clubsQueen, spadesQueen,heartsQueen, diamondsQueen} = this.state
    
    var result = "";
    var i = 0;
    
    do {
      i = i + 1;
      result = result + i;
      console.log(result)
    } while (i < 5);


  }



  render() {
    let hearts = this.state.hearts.map((x,i)=>(
      <div key={i}>
        {x.value}
      </div>
    ))
    let clubs = this.state.clubs.map((x,i)=>(
      <div key={i}>
        {x.value}
      </div>
    ))
    let diamonds = this.state.diamonds.map((x,i)=>(
      <div key={i}>
        {x.value}
      </div>
    ))
    let spades = this.state.spades.map((x,i)=>(
      <div key={i}>
        {x.value}
      </div>
    ))

    return (
      <div className="App">
        <button onClick={()=>this.drawTwo()}>Draw 2</button>
        <button onClick={()=>this.start()}>start</button>
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
    );
  }
}

export default App;
