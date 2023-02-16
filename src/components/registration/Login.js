const Login = ({ user, setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = e.target.utilisateur.value;
    const userPassword = e.target.mdp.value;
    setUser({...user, username: userLogin, password: userPassword})
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <label htmlFor="utilisateur">
        Utilisateur :
      <input name="utilisateur" type="text"/>
      </label>
      <label htmlFor="mdp">
        Mot de passe :
      <input name="mdp" type="password"/>
      </label>
      <input type="submit" className="btn" value="Se connecter"/>
    </form>
  )
}

export default Login;
