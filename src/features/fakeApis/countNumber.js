import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";

import {  selectCountNumber } from "./countSlice";

import { addNumber,subtractNumber, addValue } from "./countSlice";
import {GLOBAL_STATE} from "./globalSate";


function ListItem() {

    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const data = useSelector(selectCountNumber)

    const testData = useSelector(GLOBAL_STATE)
    console.log('testData : ',testData)

    return ( 
        <div className="wrap-item">
            <div className="wrap-btn">

                <input value={value} onChange = { e => setValue(e.target.value)} /> 
                <button onClick={ () => dispatch(addValue(value))} >Add value</button>

                <button onClick={() => dispatch(subtractNumber()) }>-</button>
                    <span style={{padding : '10px'}} > {data}</span>
                <button onClick={() => dispatch(addNumber()) }>+</button>
            </div>
        </div>
     );
}



export default ListItem;