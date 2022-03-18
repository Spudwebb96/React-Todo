import {useState} from "react";
import React from "react";
import { CardList } from "../Data/CardList";
import cards from "../App";

export default function Form({setCards, cards}) {

    const el = React.createElement('h1',{className:'text-center ,my-5'}, 'Hello React')

    const [formTitle, setFormTitle] = useState('');
    const [formContent, setFormContent] = useState('');
    const [formId, setFormId] = useState(4);
    
    // const [formState, setFormState] = useState([]);

    // const handleStateChange = e => {
    //     setFormState(e.target.value);
    // }

    const handleTitleChange = e => {
        setFormTitle(e.target.value);
    }

    const handleContentChange = e => {
        setFormContent(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (cards.length > 8){
            alert("smth");
            return
        } 
        setCards(
            e => [{title: formTitle, content: formContent, id: formId}, ...e],
            // this.useState = useState(CardList)
        );
      
        }

        // console.log(cards)
        // if (cards.length > 8){
        //     alert("smth")
        //     setCards(
        //         e => [{title: '', content: '', id: ''}, ...e],
        //         // this.useState = useState(CardList)
        //     );
   


    

    // console.log(setCards);
    // setCards([ ...cards].filter(card))


    // const [id, setId] = useState(4);
    // const HandleDelete = event => {

    // }

    // this.id = {
    //     count: 4
    // }
    // const newTodos = [...CardList];

    // const [card, setCard] = useState("");
    // console.log(card);

    
    
    // const limitTodo = (formId) => {
    //     // console.log(formId + 1)
    //     console.log(formId)

    //     if (formId + 1 > 8){
    //         alert("react can suck my balls")
    //         setCards((newerCards) => {
    //         // console.log(newerCards)
    //         const balls = newerCards.filter()
    //         return balls
    //         }
    //     )
    // onClick={() => limitTodo(formId)}
    // }


    return (
        <form className='my-5 mx-auto' style={{maxWidth: '450px'}} onSubmit={handleSubmit} >
            {/* <input type="hidden" className="form-control" 
            /> */}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       onChange={handleTitleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
                <input type="text" className="form-control" id="exampleInputPassword1" onChange={handleContentChange}/>
            </div>
            <div>{setFormId}</div>
            <button type="submit" className="btn btn-primary" onClick={() => setFormId( formId + 1)} >Post : {formId + 1}</button>
            <div>{el}</div>
            
        </form>
    )
} 