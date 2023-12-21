import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import react, {useState} from 'react'


function App() {
    
    function updateBoardCards(){
        let cardSuiteColors = ['red', 'yellow', 'green', 'blue']
        let cardArray = [];
        for(let i = 0; i < 4; i++){
            let cardNum = Math.floor(Math.random() * 12) + 1;
            let cardSuite = cardSuiteColors[Math.floor(Math.random() * 4)];
            
            cardArray = cardArray.filter((card)=>{
                if(card.number == cardNum && card.suite == cardSuite){
                    // Delete for incoming duplicate & reset loop counter.
                    i -= 1;
                    return false
                }
                // No duplicate found, proceed to push new card.
                return true;
            })
            cardArray.push({
                number: cardNum,
                suite: cardSuite
            })
        }
        return cardArray;
    }

    let [cards, updateCards] = useState(updateBoardCards());

    return (
        <div className="App">
            <h2>
                Your random 4 cards are.. 
            </h2>
            <div className='gameBoard'>
                {cards.map((card)=>{
                    return <Card key={Math.random()} {...card}/>
                })}
            </div>
            <button onClick={()=>{updateCards(updateBoardCards())}}>Get a new set</button>
        </div>
    );
}
export default App;
