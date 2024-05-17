import { useState } from "react";

function Contador () {

    const [count, setCount] = useState(0);

    return (
        <>
        <button>
         Contador: 
        </button>
        </>
    );
}

export default Contador;