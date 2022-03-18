import React from "react";

export default function IncrButtonFonction() {
    const [count,setCount] = React.useState(0);

    return(
        <button className="btn btn-primary" onClick={() => setCount(count+ 1 )}>
            Clique moi : {count}
        </button>
    )
}