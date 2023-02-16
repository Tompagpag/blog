const CreatePost = ({user, posts, setPosts}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value
    const content = e.target.content.value;
    setPosts([ {title, content, author: user}, ...posts]);
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <p>Author : <strong>{user}</strong></p>
      <label htmlFor="title">
        Titre :
      </label>
        <input id="title" name="title" type="text"/>
      <label htmlFor="content">
        Contenu :
      </label>
        <textarea id="content" name="content" rows="4" cols="25"></textarea>
      <input type="submit" className="btn" value="Ajouter >"/>
    </form>
  )
}

export default CreatePost;
