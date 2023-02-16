import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="flex">
      {posts.map((post, i) => <Post key={`post-${i}`}post={post}/>)}
    </div>
  )
}

export default PostList;
