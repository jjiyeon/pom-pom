import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

const Profile: NextPage = () => {
  const router = useRouter()
  const userName = router.query.username
  return <div>profile page of {userName}</div>
}

export default Profile
