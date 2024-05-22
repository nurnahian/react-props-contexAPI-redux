import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvide = ({children})=> {
    const [user,setUser] = useState();
    return (
    <>
        <UserContext.Prvider value ={{user,setUser}}>
            {children}
        </UserContext.Prvider>
    </>
  )
}

export default UserContextProvide; 