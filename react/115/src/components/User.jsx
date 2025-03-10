import React from 'react'
import { useParams } from 'react-router-dom'
//  for dynamic routing
const User = () => {
    const params = useParams();
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

export default User
