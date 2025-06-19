import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@/components/ui/button';
import Header from "../components/Header";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Initialize useNavigate

  // Example blog post data - in a real application, you would fetch this based on the ID
  const blogPost = {
    id: id,
    title: `Blog Post ${id}`,
    date: 'October 26, 2023',
    author: 'Clofy Tech Team',
    content: `This is the detailed content for blog post number ${id}. It covers various aspects of cloud solutions and technology. In a real application, this content would be dynamically loaded from a database or API. The goal of this page is to provide comprehensive information about a specific topic, offering insights and value to the reader. You can expand on this content with more rich text, images, and other multimedia elements to make it engaging and informative.`,
    image: 'https://via.placeholder.com/800x400?text=Blog+Post+Image',
  };

  if (!blogPost.id) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={blogPost.image} alt={blogPost.title} className="w-full h-auto object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
            <p className="text-gray-600 text-sm mb-4">
              By <span className="font-semibold">{blogPost.author}</span> on {blogPost.date}
            </p>
            <div className="prose max-w-none mb-6">
              <p>{blogPost.content}</p>
              {/* Add more detailed content here */}
              <p>Further details and analysis can be added here. This section can include sub-headings, lists, and more paragraphs to elaborate on the topic. Remember to consider SEO best practices and user readability.</p>
            </div>
            {/* Use navigate('/blog') to go to the blog listings page */}
            <Button onClick={() => navigate('/blog')}>Back to Blog Listings</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;