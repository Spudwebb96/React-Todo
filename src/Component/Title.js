import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class Title extends Component {
    text = 'Darkness';
    nb = 5;
    obj = {
        nom: "Lovecraft",
        entite: "cthuluh"
    };
    render() {
        return (
            <div className="bg-dark">
                <h1 className="text-center py-5 text-light">Hello {this.text.repeat(this.nb)}</h1>
                <h1 className="text-center py-5 text-light">Hello {this.text.repeat(this.props.nb ?? 1)}</h1>
            </div>
    
        )
    }
}

export default Title;