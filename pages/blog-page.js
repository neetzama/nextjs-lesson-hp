import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

export default function Blog({ posts }) {
  return (
    <Layout title={'Blog'}>
      <ul>{posts && posts.map((post) => <Post post={post} />)}</ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();

  return { props: { posts } };
}
