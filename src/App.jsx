import { useEffect, useState } from 'react';
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Postcard from "./Component/Postcard";
import Footer from "./Component/Footer";

export default function LandingPageBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((err) => console.error(err));
  }, []);

  return (
    <div className="font-sans">
      <Navbar/>
      <Hero/>

      <section className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Postcard key={post.id} title={post.title} body={post.body} />
        ))}

      </section>

      <Footer/>
    </div>
  );
}

