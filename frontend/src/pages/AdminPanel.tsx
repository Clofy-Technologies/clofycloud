import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col">
        <div className="text-2xl font-bold text-indigo-600 mb-8">Admin Panel</div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li><Link to="#users" className="block px-3 py-2 rounded hover:bg-indigo-50">User Management</Link></li>
            <li><Link to="#posts" className="block px-3 py-2 rounded hover:bg-indigo-50">Blog Management</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* User Management */}
        <section id="users" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">john@example.com</td>
                <td className="px-4 py-2">Acme Corp</td>
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded">Edit</button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                </td>
              </tr>
              {/* More users... */}
            </tbody>
          </table>
        </section>

        {/* Blog Management: List Posts */}
        <section id="posts" className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Blog Posts</h2>
            <button onClick={() => window.location.href = '#post-form'} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">New Post</button>
          </div>
          <table className="w-full bg-white rounded shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">AI in Cloud 2025</td>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">Jun 18, 2025</td>
                <td className="px-4 py-2">News</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded">Edit</button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                </td>
              </tr>
              {/* More posts... */}
            </tbody>
          </table>
        </section>

        {/* Blog Management: New/Edit Post Form */}
        <section id="post-form" className="bg-white rounded shadow p-6 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">New / Edit Blog Post</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter post title" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Slug</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="post-slug" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>News</option>
                <option>Case Studies</option>
                <option>Use Cases</option>
                <option>Best Practices</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Tags (comma-separated)</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="AI, Cloud, DevOps" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Body</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-40" placeholder="Write your article here..."></textarea>
            </div>
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Save Post</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;