import { useEffect, useRef } from "react"

export const Header = ({ category, searchPost, filterByCategoryPost, sortGenrePost }) => {
    const searchRef = useRef()
    const filterRef = useRef()
    const sortRef = useRef()

    const onFilterPost = () => {
        filterByCategoryPost(filterRef.current.value)
    }

    const onSearchPost = () => {
        searchPost(searchRef.current.value)
    }

    const onsortGenrePost = () => {
        // console.log(sortRef.current);
        
        sortGenrePost(sortRef.current.value)
    }

    return (
        <>
            <nav className="shadow p-3 d-flex align-items-center bg-light position-sticky top-0 start-0 z-1">
                <a href="/post" className="fs-5 text-decoration-none ms-5 text-primary">投稿</a>

                <input type="text" className="ms-5" placeholder="キーワード検索" ref={searchRef} onInput={onSearchPost} />

                <select className="ms-5" onChange={onFilterPost} ref={filterRef}>
                    <option value={0}>すべて</option>
                    {
                        category &&
                        category.map((cat) => {
                            return <option value={cat.name} key={cat.id}>{cat.name}</option>
                        })
                    }
                </select>

                <select className="ms-5" onChange={onsortGenrePost} ref={sortRef}>
                    <option value="all">新着順</option>
                    <option value="likes">いいね順</option>
                </select>
            </nav>
        </>

    )
}
