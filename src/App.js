// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
 
// export default App;

import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Component/Card";
import {CardList} from "./Data/CardList";
import Form from "./Component/Form";
// import Delete from "./Component/Delete"

export default function App() {

    const [cards, setCards] = useState(CardList);
    // const [newCards, setNewCards] = useState(CardList);
    // const [card, setCard] = useState("");
    // console.log(CardList)
    // console.log(cards)

    const deleteTodo = (cardId) => {
        // console.log(cardId)
        setCards((newCards) => { 
            const zeubi = newCards.filter((card) => card.id !== cardId )
            console.log(zeubi)
            return zeubi
        })
    }

    const checkTodo = (id) => {
        const mapped = cards.map(
            card => {
                return card.id == id ? { ...card, complete: !card.complete} : { ...card};
            }
        )
        setCards(mapped)
        console.log(cards)
    }

    // const limitTodo = (formId) => {
    //     console.log("sfs")
    //     cards.map(
    //         card => {
    //             const cardnumber = card.id
    //             // return cardnumber
    //             if (cardnumber > 8){
    //                 alert("react can suck my balls")
    //                 return cards-[card.id.cardnumber];
    //             }
    //         })
            

    //     if (cards.len > 8){
    //         deleteTodo(id)
    //     } 
    // }
    
    return (
        <>
            <Form setCards={setCards} cards={cards}/>
            <div className='row row-cols-2 row-cols-md-4 g-2 p-5'>
            {/* <Delete /> */}
                {cards.map(
                    card => (
                        <Card card={card} 
                         checkTodo={checkTodo} deleteTodo={deleteTodo} 
                         title={card.title} content={card.content} id={card.id } />
                        
                    )
                )}
            </div>
        </>
    )
    
}        

// cards.splice([cards.id],[1])