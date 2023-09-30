import HomePage from '@/routes/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'

export default function App() {
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
