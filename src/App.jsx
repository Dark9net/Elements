import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome</h1>
      <p>This is the homepage placeholder.</p>
    </div>
  )
}
