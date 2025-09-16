import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { IndexPage } from './components/pages/IndexPage'
import { DetailPage } from './components/pages/DetailPage'
import { PostPage } from './components/pages/PostPage'
import { usePosts } from './hooks/usePosts'

function App() {
  const { filter, category, searchPost, filterByCategoryPost, sortGenrePost } = usePosts()
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={
            <IndexPage
              category={category}
              filter={filter}
              searchPost={searchPost}
              filterByCategoryPost={filterByCategoryPost}
              sortGenrePost={sortGenrePost}
            />}
          />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/post" element={<PostPage category={category} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
