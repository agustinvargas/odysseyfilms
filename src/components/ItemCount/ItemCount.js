import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ItemCount({ stock, initial }) {
    const [counter, setCounter] = useState(initial)
    const [btnAddDisabled, setBtnAddDisabled] = useState(initial === stock ? true : false)
    const [btnDeductDisabled, setBtnDeductDisabled] = useState(true)

    const addOne = () => {
        setBtnDeductDisabled(false)
        if (counter === stock - 1) {
            setCounter(counter + 1)
            setBtnAddDisabled(true)
        }
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const deductOne = () => {
        setBtnAddDisabled(false)
        if (counter === initial + 1) {
            setCounter(counter - 1)
            setBtnDeductDisabled(true)
        }
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="p-5 d-flex justify-content-center">
            <Button className="mx-3" type="button" variant="dark" disabled={btnDeductDisabled} onClick={() => deductOne()}>-</Button>
            <span>{counter}</span>
            <Button className="mx-3" type="button" variant="dark" disabled={btnAddDisabled} onClick={() => addOne()}>+</Button>
        </div>
    );
}

export default ItemCount;