import { memo } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>header</div>
      <div className='page'>{useRoutes(routes)}</div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App
