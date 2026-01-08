import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "React Hooks: A Complete Guide",
      date: "Jan 15, 2024",
      category: "React",
      excerpt:
        "Learn how to use React Hooks effectively in your projects. We cover useState, useEffect, and custom hooks with practical examples.",
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      date: "Jan 10, 2024",
      category: "Backend",
      excerpt:
        "Best practices for building scalable and maintainable APIs. Learn about middleware, error handling, and API design patterns.",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use What",
      date: "Jan 5, 2024",
      category: "CSS",
      excerpt:
        "A comprehensive comparison of CSS Grid and Flexbox. Understand when and how to use each for responsive layouts.",
    },
  ];

  return (
    <section id="blog" className="blog">
      <h2 className="section-title">
        Design <span>Thoughts</span>
      </h2>
      <div className="blog__posts">
        {posts.map((post) => (
          <div key={post.id} className="blog__post">
            <span className="category">{post.category}</span>
            <h3>{post.title}</h3>
            <div className="date">{post.date}</div>
            <p>{post.excerpt}</p>
            <a href="#" className="read-more">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
