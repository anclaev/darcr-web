import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '@pages/dash'
import Home from '@pages/home'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
