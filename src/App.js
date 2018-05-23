import React, { Component } from 'react';
import './styles/main.css';
import axios from 'axios';
import Card from './components/Card/Card';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {TimelineMax, Back} from 'gsap';
import LineSvg from './images/LineSvg';

class App extends Component {
  constructor(){
    super();
    this.state={
      deckId:'',
      spades:[],
      hearts:[],
      clubs:[],
      diamonds:[],
      queensFound:0, 
      cardsDrawn:0
    }
  }

  componentDidMount(){
    // On mount get deck id.
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(res=>{
      this.setState({deckId:res.data.deck_id})
      this.animation()
    })
  }

  animation(){
    let tl = new TimelineMax();
    // tl.set('.logo', {x:0})/
    tl.from('.logo', 1, {x:-300, ease: Back.easeOut },'+=0.5')
    .from('.buttons', 1, {x:-300, ease: Back.easeOut },'-=0.75')
    .from('.deck',  1, {x:-300, ease: Back.easeOut },'-=0.75')
    .from('h2, h3', 1, {opacity:0})
    .from('#line', 1, {width:'0px'},'-=0.75')
    
  }

  drawTwo(){
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`).then(res=>{
      // Destructure this.state 
      let {clubs,  spades,  hearts, diamonds, queensFound, cardsDrawn} = this.state
      let newCardsDiamonds=[]
      let newCardsHearts=[]
      let newCardsSpades=[]
      let newCardsClubs=[]
      for (let i in res.data.cards){
        // for each card drawn check the suit and if its a queen, sort into corresponding list and increment queensFound.
        switch (res.data.cards[i].suit) {
          case "CLUBS": 
            if(res.data.cards[i].value === "QUEEN"){
              this.setState({ queensFound: queensFound +=1 })
              newCardsClubs.push(res.data.cards[i])
            }else{
              newCardsClubs.push(res.data.cards[i])
            }
            break;
          case "DIAMONDS": 
            if(res.data.cards[i].value === "QUEEN"){
              this.setState({ queensFound: queensFound +=1 })
              newCardsDiamonds.push(res.data.cards[i])
            }else{
              newCardsDiamonds.push(res.data.cards[i])
            }
          break;
          case "SPADES": 
            if(res.data.cards[i].value === "QUEEN"){
              this.setState({queensFound: queensFound +=1 })
              newCardsSpades.push(res.data.cards[i])
            }else{
              newCardsSpades.push(res.data.cards[i])
            }
          break;
          case "HEARTS":
            if(res.data.cards[i].value === "QUEEN"){
              this.setState({ queensFound: queensFound +=1 })
              newCardsHearts.push(res.data.cards[i])
            }else{
              newCardsHearts.push(res.data.cards[i])
            }
            break;
          default: console.log('defaulted')
            break;
        }
      }
      this.setState({
        hearts:[...hearts, ...newCardsHearts],
        clubs:[...clubs, ...newCardsClubs],
        diamonds:[...diamonds, ...newCardsDiamonds],
        spades:[...spades, ...newCardsSpades],
        cardsDrawn: cardsDrawn + 2
      })
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
        queensFound:0,
        cardsDrawn:0
      });
  }

  render() {
    let hearts = this.state.hearts.map((x,i)=>(
      <CSSTransition               
                key={i}
                timeout={500}
                classNames="fade">
       <Card image={x.image} value={x.value}/>
       </CSSTransition>
       
    ))
    let clubs = this.state.clubs.map((x,i)=>(
      <CSSTransition               
                key={i}
                timeout={500}
                classNames="fade">
       <Card image={x.image} value={x.value}/>
       </CSSTransition>
    ))
    let diamonds = this.state.diamonds.map((x,i)=>(
      <CSSTransition               
                key={i}
                timeout={500}
                classNames="fade">
       <Card image={x.image} value={x.value}/>
       </CSSTransition>
    ))
    let spades = this.state.spades.map((x,i)=>(
      <CSSTransition               
                key={i}
                timeout={500}
                classNames="fade">
       <Card image={x.image} value={x.value}/>
       </CSSTransition>
    ))

    return (
      <div className="App">
        <div className='table'>
          <LineSvg className='LineSvg' height='12px' width='600px'/>
          <div className='controls'>
            <div className='logo'>
            </div>
            <div className='buttons'>
              <button onClick={()=>this.start()}>Start</button>
              <button onClick={()=>this.reset()}>Reset</button>
            </div>
            {/* <button onClick={()=>this.drawTwo()}>drawtwo</button> */}
            <img className='deck' src='/images/CardBack.png' alt='deck'/>
            <h3>Cards Drawn:{this.state.cardsDrawn}</h3>
          </div>
          <div>
            <h2 className='red'>Hearts</h2>
            <TransitionGroup className='card-container'>
              {hearts}
            </TransitionGroup>
          </div>
          <div>
            <h2>Clubs</h2>
            <TransitionGroup className='card-container'>
              {clubs}
            </TransitionGroup>
          </div>
          <div>
            <h2 className='red'>Diamonds</h2>
            <TransitionGroup className='card-container'>
              {diamonds}
            </TransitionGroup>
          </div>
          <div>
            <h2>Spades</h2>
            <TransitionGroup className='card-container'>
              {spades}
            </TransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
