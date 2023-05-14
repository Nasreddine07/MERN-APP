import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('isAuth')
  const User = useSelector(state=> state.User.user)
  return (
    <div>
       <h2>Welcome to {User?.name} Profile</h2>
    </div>
  )
}

export default Profile
