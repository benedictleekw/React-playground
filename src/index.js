import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world")
// }

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41j2aGV1ujL._SY346_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>The Eye of the World</h1>;
const Author = () => <h4>ROBERT JORDAN</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
