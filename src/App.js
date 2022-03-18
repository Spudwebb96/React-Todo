import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Component/Card";
import {CardList} from "./Data/CardList";
import Form from "./Component/Form";

export default function App() {

    const [cards, setCards] = useState(CardList);


    const deleteTodo = (cardId) => {
        setCards((newCards) => { 
            const newstate = newCards.filter((card) => card.id !== cardId )
            console.log(newstate)
            return newstate
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

