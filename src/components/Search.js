export default function Search({ posts, selectedTags, setSelectedTags }) {
  // Extract all unique hashtags from posts
  const allHashtags = posts.flatMap(post => post.hashtags);
  const uniqueHashtags = [...new Set(allHashtags)];

  return (
    <div className="mb-6">
      {/* Display Hashtags as Clickable Buttons */}
      {uniqueHashtags.map(tag => (
        <button
          key={tag}
          onClick={() => {
            if (selectedTags.includes(tag)) {
              // Remove tag if already selected
              setSelectedTags(selectedTags.filter(t => t !== tag));
            } else {
              // Add tag if not selected
              setSelectedTags([...selectedTags, tag]);
            }
          }}
          className={`px-3 py-1 rounded-full mr-2 mb-2 ${
            selectedTags.includes(tag)
              ? 'bg-blue-500 text-white' // Selected tag style
              : 'bg-gray-200 text-gray-700' // Unselected tag style
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}