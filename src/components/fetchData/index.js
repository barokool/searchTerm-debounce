import React from 'react'
import PropTypes from 'prop-types'
const PostList = props => {
    const { posts } = props;

    return (
        <div className="mx-20">
            {posts.map(post => (
                <div key={post.id} className=" shadow-md mb-4  bg-white  p-2 rounded-xl ">
                    <div >
                        {post.title}
                    </div>
                </div>
            ))}
        </div>
    )
}
PostList.propTypes = {
    posts: PropTypes.array,
}

PostList.defaultProps = {
    posts: [],
}

export default PostList
