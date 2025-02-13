import { useState } from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Search from '../components/Search';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}
// List of words to filter by
const filterWords = ['est', 'quia', 'aut', 'ea'];

export default function Home({ posts }) {
  const [selectedWord, setSelectedWord] = useState('');

  // Filter posts based on the selected word
  const filteredPosts = selectedWord
    ? posts.filter(post => post.body.includes(selectedWord))
    : posts;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {/* Filter Buttons */}
        <div className="mb-6">
          <p className="text-gray-700 mb-2">Filter by word:</p>
          <div className="flex flex-wrap gap-2">
            {filterWords.map(word => (
              <button
                key={word}
                onClick={() => setSelectedWord(word)}
                className={`px-3 py-1 rounded-full ${
                  selectedWord === word
                    ? 'bg-blue-500 text-white' // Selected word style
                    : 'bg-gray-200 text-gray-700' // Unselected word style
                }`}
              >
                {word}
              </button>
            ))}
            {/* Clear Filter Button */}
            <button
              onClick={() => setSelectedWord('')}
              className="px-3 py-1 rounded-full bg-gray-200 text-gray-700"
            >
              Clear Filter
            </button>
          </div>
        </div>

        {/* Display Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}