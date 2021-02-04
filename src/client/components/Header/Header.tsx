import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className='Header'>
      <section className='HeaderSection'>
        <div>
          <h1>Pages-app</h1>
        </div>
        <nav>
          <ul>
            {pathname !== '/' ? (
              <li>
                <Link to='/'>To Home Page</Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header
