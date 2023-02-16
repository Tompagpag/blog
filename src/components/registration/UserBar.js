import Logout from "./Logout";
import Login from "./Login";

const UserBar = ({ user, setUser }) => {
  console.log(user)
  return (
    <>
      {user ? <Logout user={user} setUser={setUser} /> : <Login user={user} setUser={setUser}/>}
    </>
  )
}

export default UserBar;
