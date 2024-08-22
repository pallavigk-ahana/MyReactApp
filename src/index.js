// import React from 'react'
// import ReactDOM from 'react-dom/client'

// // function Greeting() {
// //   return (
// //     <div>
// //       <h2>My First React Component</h2>
// //     </div>
// //   )
// // }
// // function Greeting() {
// //   return React.createElement(
// //     'div',
// //     {},
// //     React.createElement('h2', {}, 'Hello world')
// //   )
// // }
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }
// function Person() {
//   return <h2>React</h2>
// }
// //const Person = () => <h2>React</h2>
// const Message = () => {
//   return <p>Learn React</p>
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'))

// // root.render(<Greeting />)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// function Booklist() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   )
// }
// function Book() {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/81
// 3aV273-rL._AC_UL900_SR900,600_.jpg"
//     alt="It Ends with Us: A Novel"
//   />
// )
// const Title = () => <h1>It Ends with Us: A Novel</h1>
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   }
//   return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Obj />)

// to access array of objects

// const arr = [
//   {
//     title: '1',
//     auth: 'Auth1',
//     id: 1,
//   },
//   {
//     title: '2',
//     auth: 'Auth2',
//     id: 2,
//   },
// ]

// const Obj = () => {
//   return (
//     <section>
//       {arr.map((ob, index) => {
//         const { title, auth, id } = ob
//         //console.log(ob)
//         console.log(index)

//         return (
//           // <h1>
//           //   {title} {auth}
//           // </h1>
//           <section>
//             <Fun title={title} auth={auth} id={id} />
//           </section>
//         )
//       })}
//     </section>
//   )
// }
// const Fun = (props) => {
//   //console.log(props)
//   const { title, auth, id } = props
//   return (
//     <section>
//       <h1>{title}</h1>
//       <h2>{auth}</h2>
//       <h2>{id}</h2>
//     </section>
//   )
// }

//spread operator(...)
// const a = ['1', '2', '3']
// const b = [...a, '4', '5']
// console.log(a, b)

//events
// const Event = () => {
//   const click = () => {
//     alert('button click')
//   }
//   const change = () => {
//     console.log('input change')
//   }
//   const sub = (e) => {
//     console.log(e)
//     e.preventDefault()
//     console.log('form')
//   }
//   return (
//     <section>
//       <form onSubmit={sub}>
//         <input type="text" onChange={change} name="input" />
//         <button onClick={click}>Click me</button>

//         <button onClick={() => console.log('anonymous')}>Click</button>
//       </form>
//     </section>
//   )
// }

//component feature
// const books = [
//   {
//     author: 'Jordan Moore',
//     title: 'Interesting Facts For Curious Minds',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//     id: 1,
//   },
//   {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//     id: 2,
//   },
//   {
//     author: 'James Clear',
//     title: '',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//     id: 3,
//   },
// ]

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} />
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author } = props
//   console.log(title)
//   const displayTitle = () => {
//     console.log(title)
//   }

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={displayTitle}>display title</button>
//       <h4>{author} </h4>
//     </article>
//   )
// }

//complex example (get book details by id as a parameter)

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
  {
    author: 'James Clear',
    title: '',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 3,
  },
]

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props
  console.log(getBook)

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
