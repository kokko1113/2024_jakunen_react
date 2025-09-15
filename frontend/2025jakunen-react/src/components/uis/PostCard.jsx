export const PostCard = ({ post }) => {

    return (
        <a href={`/${post.id}`} className="card m-3 w-25 text-decoration-none">
            <img src={post.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <p className="card-text">投稿者: {post.author}</p>
                <p className="card-text">カテゴリー: {post.category}</p>
                <p className="card-text">👍{post.likes}　💬{post.commentCount}</p>
            </div>
        </a>
    )
}