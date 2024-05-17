import './App.css'
import { useState } from 'react';
import Contador from './components/Contador'
import ContadorCompartilhado from './components/ContadorCompartilhado'

function App () {

  const [count, setCount] = useState(0);

    const add = () => 
{
    setCount(count + 1)
}

    return (
        <>
        <Contador />
        <Contador />
        
        <ContadorCompartilhado
        count={count}
        add={add}/>

        <ContadorCompartilhado
        count={count}
        add={add}/>

        </>
    )
}

export default App