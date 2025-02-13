import Layout from '../../components/Layout';

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const paths = posts.map(post => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <Layout>
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <p className="text-sm text-gray-500">
          Post ID: {post.id} | Author: User {post.userId}
        </p>
      </div>
    </Layout>
  );
}