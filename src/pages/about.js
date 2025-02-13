import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Welcome to our blog! We are passionate about sharing knowledge and insights on various topics.
          Our mission is to provide high-quality content that inspires and educates our readers.
        </p>
      </div>
    </Layout>
  );
}