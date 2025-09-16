import { useEffect, useState } from "react"

export const usePosts = () => {
    const [posts, setPosts] = useState([])
    const [category, setCategory] = useState([])
    const [search, setSearch] = useState("")
    const [selectCategory, setSelectCategory] = useState("")
    const [sort, setSort] = useState("all")
    const [filter, setFilter] = useState([])

    const getAllPosts = async () => {
        const res = await fetch(`http://localhost:3001/api/posts`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        // console.log(data);

        if (res.ok) {
            setPosts(data)
            setFilter(data)
        }
    }

    const getCategory = async () => {
        const res = await fetch(`http://localhost:3001/api/categories`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()


        if (res.ok) setCategory(data)
    }

    const filterByCategoryPost = (category) => {
        setSelectCategory(category)
    }

    const searchPost = (keyword) => {
        setSearch(keyword)
    }

    const sortGenrePost = (jenre) => {
        // console.log(e.target.value);
        
        setSort(jenre)
    }

    function filterPost() {
        const data = posts.filter(post => {
            const matchSearch = post.title.includes(search) || post.content.includes(search)
            const matchCategory = selectCategory === "" || selectCategory === post.category
            return matchSearch && matchCategory
        })
        return data
    }

    useEffect(() => {
        let filter = filterPost()
        if (sort === "likes") {
            filter = [...filter].sort(
                (a, b) => b.likes - a.likes
            );
        }
        setFilter(filter)
    }, [search, selectCategory, sort])

    useEffect(() => {
        getAllPosts()
        getCategory()
    }, [])

    return { filter, category, searchPost, filterByCategoryPost, sortGenrePost }
}