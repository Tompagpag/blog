const Logout = ({user, dispatch}) => {
    return (
        <form onSubmit={e => { e.preventDefault(dispatch({type:'LOGOUT'}));} }>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout" className="btn"/>
        </form>
        )

}

export default Logout;
