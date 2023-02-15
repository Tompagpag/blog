const Users = ({users}) => {
    return (
      <ul>
        {users.map((user, i) => <li key={i}>{user}</li>)}
      </ul>
    )
}

export default Users;
