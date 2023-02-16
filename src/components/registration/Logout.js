const Logout = ({user, setUser}) => {

  const handleClick = (e) => {
    setUser({username: '', password: ''});
  }

  return (
    <>
      <p>Logged in as : <strong>{user}</strong></p>
      <button onClick={handleClick} className="btn">Se déconnecter</button>
    </>
  )
}

export default Logout;
