import { useEffect, useRef, useState } from "react"
import { usePosts } from "../../hooks/UsePosts"
import { Header } from "../uis/Header"

export const PostPage = ({ }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const { category } = usePosts()

    const postPost = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const res = await fetch(`http://localhost:3001/api/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    "title": title,
                    "content": content,
                    "author": author,
                    "category": selectedCategory,
                }
            )
        })
        setIsLoading(false)
        const data=await res.json()
        console.log(data);
        
        if (res.ok) {
            alert("投稿が作成されました")
        } else {
            alert("投稿できませんでちた")
        }
    }

    const checkIsFilled = () => {
        setIsFilled(title.trim() !== "" && content.trim() !== "" && author.trim() !== "")
    }

    useEffect(() => {
        checkIsFilled()
    }, [title, content, author, selectedCategory])

    return (
        <>
            <a href="/" className="btn btn-primary position-absolute top-0 left-0 m-4">戻る</a>
            <div className="d-flex justify-content-center">
                <form action="/" className="p-4 w-50">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">タイトル(必須)</label>
                        <input type="text" className="form-control" id="title" required value={title} onInput={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">コンテンツ(必須)</label>
                        <input type="text" className="form-control" id="content" required value={content} onInput={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">投稿者(必須)</label>
                        <input type="text" className="form-control" id="author" required value={author} onInput={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">カテゴリー(必須)</label>
                        <select className="ms-4" id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            {
                                category &&
                                category.map((cat) => {
                                    return <option value={cat.id} key={cat.id}>{cat.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">画像URL</label>
                        <input type="text" className="form-control" id="img" />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={postPost} disabled={!isFilled || isLoading}>
                        {!isLoading ? "投稿" : "投稿中..."}
                    </button>
                </form>
            </div>
        </>
    )
}
