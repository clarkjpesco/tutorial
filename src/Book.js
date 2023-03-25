import React from "react";
const Book = ({ img, title, author }) => {
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

export default Book;
