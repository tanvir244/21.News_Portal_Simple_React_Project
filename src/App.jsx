import { useState } from 'react'
import fakeData from './fakeData/fakeData'
import fakeComment from './fakeData/fakeComment'
import './App.css'
import AllNews from './Components/AllNews/AllNews'
import Header from './Components/Header/Header'
import { NewsContext } from './Components/Context/Context'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import NewsDetails from './Components/NewsDetails/NewsDetails'
import Others from './Components/Others/Others'
import Error404 from './Components/Error404/Error404'
import Economics from './Components/Economics/Economics'

function App() {
  // setting fakeData in a State
  const [news, setNews] = useState(fakeData);
  
  // getting commentData from cloud
  const [comments, setComments] = useState(fakeComment);

  return (
    <>
      <NewsContext.Provider value={{news, setNews, comments, setComments}}>

      <Header></Header>
        <Router>
          <Routes>
            <Route path='/home' element={<AllNews />}></Route>
            <Route path='/economics' element={<Economics />}></Route>
            <Route path='/details' element={<NewsDetails />}></Route>
            <Route path='/others' element={<Others />}></Route>
            <Route path='/' element={<AllNews />}></Route>
            <Route path='/news/:newsId' element={<NewsDetails />}></Route>

            <Route path='*' element={<Error404 />}></Route>
          </Routes>
        </Router>
      </NewsContext.Provider>
    </>
  )
}

export default App
