/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params = useParams()
  return (
    <div>
      i am a user named {params.username}
    </div>
  )
}

export default User
