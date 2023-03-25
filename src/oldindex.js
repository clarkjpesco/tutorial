import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

//Setup Vars

// const books = [
//   {
//     id: 1,
//     img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     id: 2,
//     img: "https://m.media-amazon.com/images/I/81WZ6QvGZ2L._AC_UY327_FMwebp_QL65_.jpg",
//     title: "It's not easy being a Bunny",
//     author: "Marilyn Sadler",
//   },

//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/91Wx6Ot-hWL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "The Very Hungry Caterpillar",
//     author: "Eric Carle",
//   },

//   {
//     id: 4,
//     img: "https://m.media-amazon.com/images/I/61z6iN25peL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "A Frog Ate My Sandwich!",
//     author: "Christine Durkin and Mousam Banerjee",
//   },

//   {
//     id: 5,
//     img: "https://m.media-amazon.com/images/I/91uoKoFZGCL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "When You Trap a Tiger",
//     author: "Tae Keller",
//   },

//   {
//     id: 6,
//     img: "https://m.media-amazon.com/images/I/61YW0xYCAkL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "Dragons Love Farts: They're more fun than Tacos!",
//     author: "Hollywood Kay and Yorris Handoko",
//   },

//   {
//     id: 7,
//     img: "https://m.media-amazon.com/images/I/71RR-TIkbrL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "An Elephant in the Garden",
//     author: "Michael Morpurgo ",
//   },

//   {
//     id: 8,
//     img: "https://m.media-amazon.com/images/I/614B6thl9bL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "BOYS ARE WONDERFUL",
//     author: "Amber A. Adams",
//   },
// ];

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };
// const secondBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL127_SR127,127_.jpg",
//   title: "It's not easy being a Bunny",
//   author: "Marilyn Sadler",
// };

// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg";
// const title = "I Love You to the Moon and Back";
// const author = "Amelia Hepworth";

function BookList() {
  // const { img, author, title } = firstBook;
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
// function BookList() {
//   // const { img, author, title } = firstBook;
//   return (
//     <section className='booklist'>
//       <Book {...firstBook} />
//       <Book {...secondBook} />
//     </section>
//   );
// }
// function BookList() {
//   // const { img, author, title } = firstBook;
//   return (
//     <section className='booklist'>
//       <Book {...firstBook}>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae
//           iure officia accusamus, dicta ducimus illum porro quos sit unde
//           eveniet libero architecto omnis facilis necessitatibus consequatur
//           commodi, in sunt?
//         </p>
//       </Book>
//       <Book {...secondBook} />
//     </section>
//   );
// }
// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book job='Developer' />
//       <Book title='random title' number={22} />
//     </section>
//   );
// }

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  // console.log(props);

  // attribute, eventhandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello World!");
  };

  const complexHandler = (author) => {
    console.log(`The Author is: ${author} `);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexHandler(author)}>
        More complex
      </button>
    </article>
  );
};
// const Book = ({ img, title, author,children }) => {
//   // const { img, title, author } = props;
//   // console.log(props);
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };
// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg'
//     alt=''
//   />
// );

// const Title = () => <h1>I Love You to the Moon and Back</h1>;
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Amelia Hepworth
//   </h4>
// );
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Clark Pesco</h2>;
// const Message = () => {
//   return <p>This is my message!</p>;
// };

// const Greeting = () => {
//   return (
//     <div>
//       <h3>Hello People</h3>
//       <ul>
//         <li>
//           <a href='#'>hello world</a>
//         </li>
//         <img src='' alt='' />
//         <input type='text' name='' id='' />
//       </ul>
//       <h1>Hello World</h1>
//     </div>
//   );
// };

ReactDom.render(<BookList />, document.getElementById("root"));
