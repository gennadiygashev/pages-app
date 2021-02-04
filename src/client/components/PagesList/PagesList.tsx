import * as React from 'react'
import { PagesListResponse } from '../../../common/PagesListResponse'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './PagesList.css'

const PagesList = () => {
  const [articles, setArticles] = React.useState<string[]>([])

  React.useEffect(() => {
    fetch('/api/page/list')
      .then<PagesListResponse>(response => response.json())
      .then(articles => setArticles(articles))
  }, [])

  return (
    <Container>
      <nav className='List'>
        <h2>Pages:</h2>
        <ul>
          {articles.map(item => (
            <li>
              <Link to={`/page/${item}`}>
                {item.replace(/.md/g, '')}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}

export default PagesList
