import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Postcard from "./Component/Postcard";
import Footer from "./Component/Footer";
import ClickSpark from "./Component/ClickSpark";
import Article from "./Component/Article";

export default function LandingPageBlog() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="font-sans bg-white dark:bg-slate-900">
      <ClickSpark
        sparkColor="pink"
        sparkSize={10}
        sparkRadius={40}
        sparkCount={12}
        duration={600}
      >
        <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen} />
        
        <Hero id="Home" />

        <Article id="Tutorial"></Article>
        <section id="Kelas" className="p-8 grid lg:pt-30 grid-cols-1 lg:grid-cols-3 gap-6 dark:bg-slate-900">
          {posts.map((post) => (
          <Postcard key={post.id} title={post.title} body={post.body} />
          ))}
        </section>

        <Footer id="Discord" />
      </ClickSpark>
    </div>
  );
}
