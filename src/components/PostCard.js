import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/post/${post.id}`} className="hover:text-blue-600">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{post.body.substring(0, 100)}...</p>
      <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
        Read More →
      </Link>
    </div>
  );
}