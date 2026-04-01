import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import Home from './pages/Home'
import Obrigado from './pages/Obrigado'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
