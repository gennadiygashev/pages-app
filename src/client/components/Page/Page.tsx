import * as React from 'react'
import { useParams } from 'react-router-dom'
import * as ReactMarkdowm from 'react-markdown'
import Container from '../Container/Container'
import './Page.css'

export const Page = () => {
  const { name } = useParams()
  const [article, setArticle] = React.useState<string>('')

  React.useEffect(() => {
    fetch(`/api/page/${name}`)
      .then(response => response.text())
      .then(article => setArticle(article))
  }, [])

  return (
    <Container>
      <>
        <h1 className='Title'>{name.replace(/.md/g, '')}</h1>
        <ReactMarkdowm source={article} />
      </>
    </Container>
  )
}

export default Page
