import React from 'react';
import Users from './Users';

const Form = (props) => {
    const [value, setValue] = React.useState({ username: '', users: [], message: '' });

    const handleChange = (event) => {
      setValue({ ...value, username: event.target.value.toUpperCase() });
    };

    const handleSubmit = (event) => {
      const username = event.target[0].value;
      event.preventDefault();
      if (username.trim() === '') {
        setValue({ ...value, message: `Attention votre champ est vide.` });
        return;
      }

      if (value.users.includes(username) === true) {
        setValue({ ...value, message: `Attention l'utilisateur ${username} existe déjà dans la liste.` });

        return;
      }
      setValue({ ...value, users: [...value.users, value.username] });
    };

    return (
      <React.Fragment>
        {value.message && <p>{value.message}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={value.username}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Add" className='button' />
        </form>
        {value.users.length > 0 && (
          <Users users={value.users} />

        )}
      </React.Fragment>
    );
};

export default Form;
