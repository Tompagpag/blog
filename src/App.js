import './App.css';
import CreatePost from './components/publication/CreatePost';
import PostList from './components/publication/PostList';
import UserBar from './components/registration/UserBar';
import appReducer from './reducers';
import React, { useEffect } from 'react';
// import CalcReducer from './components/pages/CalcReducer';


function App() {
  const defaultPosts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
  ];

  // const [posts, setPosts] = React.useState(defaultPosts);
  // const [user, setUser] = React.useState({username: '', password: ''});

    const [state, dispatch] = React.useReducer(appReducer, { user: '', posts: defaultPosts })
    const { user, posts } = state;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then((json) => {
              console.log(json.name)
            })
    },[])

    return (
        <div style={{ padding: 8 }}>
            <UserBar user={user} dispatch={dispatch} />
            <br />
            {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
            <br />
            <hr />
            <PostList posts={posts} />
        </div>
    )
}
export default App;
