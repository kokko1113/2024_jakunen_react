import { usePosts } from "../../hooks/UsePosts"
import { Header } from "../uis/Header"
import { PostCard } from "../uis/PostCard"

export const IndexPage = ({ filter, searchPost, category, filterByCategoryPost, sortGenrePost }) => {

    return (
        <>
            <Header
                searchPost={searchPost}
                category={category}
                filterByCategoryPost={filterByCategoryPost}
                sortGenrePost={sortGenrePost}
            />
            <p className="fs-2 fw-bold text-center m-4">投稿一覧</p>

            <div className=" d-flex justify-content-evenly flex-wrap my-4">
                {filter.length !== 0 ?
                    filter.map((post) => {
                        return <PostCard post={post} key={post.id} />
                    })
                    :
                    "検索結果が見つかりませんでした"
                }
            </div>
        </>
    )
}
