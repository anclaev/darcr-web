import { Routes, Route } from 'react-router-dom'

import Dashboard from '@pages/dash'
import Home from '@pages/home'

import { ProtectedRoute } from '@components/ProtectedRoute'

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
