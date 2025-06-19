import React from 'react';
import Header from "../components/Header";

const BlogListing = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our <span className="text-blue-600">Blog </span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog Post Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="\OIP (34).jpeg" alt="Blog Post Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Blog Post Title 1</h2>
              <p className="text-gray-600 text-sm mb-4">Published on October 26, 2023</p>
              <p className="text-gray-700 leading-relaxed">This is a brief summary of the blog post. It should give the reader an idea of what the post is about and entice them to read more.</p>
              <a href="/blog/1" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">Read More</a>
            </div>
          </div>

          {/* You can duplicate the above div for more blog posts */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="\OIP (35).jpeg" alt="Blog Post Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Blog Post Title 2</h2>
              <p className="text-gray-600 text-sm mb-4">Published on November 1, 2023</p>
              <p className="text-gray-700 leading-relaxed">This is another brief summary of a blog post. Describe the content to encourage users to click and read the full article.</p>
              <a href="/blog/2" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">Read More</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="\OIP (36).jpeg" alt="Blog Post Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Blog Post Title 3</h2>
              <p className="text-gray-600 text-sm mb-4">Published on November 10, 2023</p>
              <p className="text-gray-700 leading-relaxed">A third example of a blog post summary. Keep it concise and engaging to draw readers in.</p>
              <a href="/blog/3" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListing;