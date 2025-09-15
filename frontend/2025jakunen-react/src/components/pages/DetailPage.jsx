import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const DetailPage = ({ }) => {
    const param = useParams()
    const [post, setPost] = useState("")

    const getPostApi = async () => {
        const res = await fetch(`http://localhost:3001/api/posts/${param.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        console.log(data);

        if (res.ok) setPost(data)
    }


    useEffect(() => {
        getPostApi()
    }, [])
    return (
        <div className="mh-100 mw-100 d-flex overflow-hidden ">
            <a href="/" className="position-absolute m-5 top-0 left-0 btn btn-primary">戻る</a>
            <div className="mh-100 w-75 d-flex flex-column align-items-center">
                <p className="fs-2 fw-bold">{post.title}</p>
                <img src={post.imageUrl} alt="" className="d-block h-50" />
                <p className="fw-bold fs-5">{post.content}</p>
                <p className="">{post.author}/{post.category}　👍{post.likes}</p>
            </div>
            <div className="mh-100 w-25 overflow-auto">
                {
                    post.commentCount === 0 ?
                        <p className="fs-3 text-grey pt-5">コメントがありません</p>
                        :
                        <div className="">
                            {
                                post.comments &&
                                post.comments.map(comment => {
                                    return <div className="mb-4" key={comment.id}>
                                        <p className="fs-6 fw-light">{comment.createdAt}/{comment.author}</p>
                                        <p>{comment.content}</p>
                                    </div>
                                })
                            }
                        </div>
                }
            </div>
        </div>
    )
}
