import React, {useState, useEffect, useReducer} from "react"
import useInputs from "./useInputs";

function reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    }
}

const Info = ()=>{
    const [state, onChange] = useInputs({
        name:"",
        nickname:""
    })
    const {name, nickname} = state;
    

    return(
        <div>
            <div>
                <input value={name} onChange={onChange} />
                <input value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b>{nickname}
                </div>
            </div>
        </div>
    )
}
export default Info