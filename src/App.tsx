import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lotto from './lotto/Lotto'
import Header from './components/Header'
import Footer from './components/Footer'
import MyFestival from './festival/MyFestival'
import FestivalContents from './festival/FestivalContents'
import TodoList from './todo/TodoList'
import TestTs from './test_ts/TestTs'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-y-hidden'>
        {<Header />}
        <main className='container mx-auto flex flex-col flex-grow overflow-y-scroll'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Lotto" element={<Lotto />} />
            <Route path="/Festival" element={<MyFestival />} />
            <Route path="/Festival/Content" element={<FestivalContents />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/TestTs" element={<TestTs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
