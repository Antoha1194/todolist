import React from 'react';
import counterStore from './store/counter';
import {observer} from "mobx-react";

const Counter = observer(() => {
    return <div>{counterStore.count}</div>
})

export default function App()
{
    return <>
        <Counter/>
        <button onClick={() => counterStore.incriment()}>+</button>
        <button onClick={() => counterStore.decriment()}>-</button>
        </>
}