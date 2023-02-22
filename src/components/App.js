import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogdata = {blogData}/>
      <About blogdata = {blogData}></About>
      <ArticleList></ArticleList>

    </div>
  );
}

export default App;
