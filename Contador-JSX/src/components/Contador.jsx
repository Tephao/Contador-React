import { useState } from "react";

function Contador () {

    const [count, setCount] = useState(0);

    function add()
{
    setCount(count + 1)
}
    return (
        <>
        <button onclick = {add}>
         Contador: {count}
        </button>
        </>
    );
}

export default Contador;