import React, { Component, useState } from "react";
import { CardList } from "../Data/CardList";

// THIS IS THE FILE OF MY PAIN AND SUFFERING
// PLEASE PAY IT NO ATTENTION

export default function Deletepost({id}) {

    // const updatedState = CardList - this.props
    // const deleteTodo = (formId) => {
    //     var newList = CardList;
    //     newList.splice(formId,1);
    //     setCards(newList);
    // }
    // const [cards, setCards] = useState(CardList);
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     setCards(
    //         e => [{title: formTitle, content: formContent, id: formId}, ...e],
    //         // this.useState = useState(CardList)
    //     );
    // }
    // const [count,setCount] = React.useState(0);
    const [cards, setCards] = useState(CardList);
    // const [Cardlist, setCardList] = useState(cards)

    // {cards.map(
    //     card => (
    //         <Card  title={card.title} content={card.content} id={card.id } />
            
    //     )
    // )};

    const deleteTodo = (id) => {
        // alert(id);
        // var CardList = cards;
        cards.splice(id,1);
        setCards(cards)
        // setCards(CardList);
        // setNewList(CardList)
        // console.log(CardList);
    };
    console.log(id)

    // const CardList = useState(CardList)
    return(
        
        // this.useState(updatedState)
        // this.setState({

        // })
        // <button className="btn btn-primary" onClick={() => setCount(count+ 1 )}>
        //     Clique moi : {count}
        // </button>
    <button type="submit" className="btn btn-danger"
    onClick={() => deleteTodo((id - 1))} >Delete : {id}</button>
        
    )
}

// const [cards, setCards] = useState(CardList);



// class Delete extends Component {
//     constructor(props) {
//         super(props);
//         this.state = this.useState;
//     };


//     render() {
//         return (<button type="submit" className="btn btn-danger"
//         onClick={() => this.setCards({ cards: this.state.cards.id - this.cards.id })} >Delete</button>);
//     }
// }
// export default Delete