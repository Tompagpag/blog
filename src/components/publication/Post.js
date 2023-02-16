const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p><em>Written by <strong>{post.author}</strong></em></p>
    </div>
  )
}

export default Post;
