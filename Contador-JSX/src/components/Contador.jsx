import { useState } from "react";

function Contador () {

    const [count, setCount] = useState(0);

    const add = () => {
    setCount(count + 1)
}
    return (
        <>
        <button onClick = {add}>
         Contador: {count}
        </button>
        </>
    );
}

export default Contador;