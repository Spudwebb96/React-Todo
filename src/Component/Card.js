import {useState} from "react";
import App from "../App";
import Deletepost from "./Delete";
import { CardList } from "../Data/CardList";
import Delete from "./Delete";
import Form from "./Form";
export default function Card({title, content, id, deleteTodo, checkTodo, card}) {


    return (
        <div className="col" >
            <div className={ card.complete ? "done" : "card"}>
                {/* <img src={image} className="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <h5>id: {id}</h5>
                    <button type="submit" className="btn btn-danger"
                    onClick={() => deleteTodo(id)} >Delete : {id}</button>
                    <button type="submit" className="btn btn-primary"
                    onClick={() => checkTodo(id)} >Check</button>
                    {/* <input type="checkbox" checked={Card.ischecked}/> */}
                </div>
            </div>
        </div>
    )
}
