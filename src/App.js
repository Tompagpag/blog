import './App.css';
import CreatePost from './components/publication/CreatePost';
import PostList from './components/publication/PostList';
import UserBar from './components/registration/UserBar';
import React from 'react';

function App() {
  const defaultPosts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
  ];

  const [posts, setPosts] = React.useState(defaultPosts);
  const [user, setUser] = React.useState({username: '', password: ''});


  return (
    <div className="App">
      <main className="App-main">
      <UserBar user={user.username} password={user.password} setUser={setUser}/>
      {user.username && (<CreatePost user={user.username} posts={posts} setPosts={setPosts}/>)}
      {user.username && (<PostList posts={posts}/>)}
      </main>
    </div>
  );
}

export default App;
