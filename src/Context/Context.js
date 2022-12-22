import { faker } from '@faker-js/faker'
import React, { createContext, useContext, useReducer, useState } from 'react'
import MsgReducer from './MsgReducer'

let MsgContext = createContext(null)



const Context = ({children}) => {
  let [text, setText] = useState("");
    let [msgList,dispatch] = useReducer(MsgReducer,[{
        msg: "hello",
            user: "Shreyash bijlwan",
            frameColor: Math.floor(Math.random()*12345699).toString(16),
            likes:0,
            id: faker.datatype.uuid(),
            time:new Date().getHours() + " : " + new Date().getMinutes()

    }])
  return (
    <MsgContext.Provider value={{msgList,dispatch,text, setText}}>
    {children}
    </MsgContext.Provider>
  )
}

export function useMsgContext(){
return useContext(MsgContext)
}

export default Context