import React from 'react'

import Post from './Post'

export default function PostList({ posts = [] }) {
    return (
        <div className='flex'>
            {posts.map((p, i) => (
                <React.Fragment key={'post-' + i}>
                    <Post {...p} />
                </React.Fragment>
            ))}
        </div>
    )
}
