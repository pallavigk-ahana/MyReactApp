import React from 'react'
import ReactDOM from 'react-dom/client'

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}
function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81
3aV273-rL._AC_UL900_SR900,600_.jpg"
    alt="It Ends with Us: A Novel"
  />
)
const Title = () => <h1>It Ends with Us: A Novel</h1>
const Author = () => <h1>Colleen Hoover</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
