import { fetchData } from '../../lib/firebase';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { email } = req.query;

  try {
    const firebaseData = await fetchData();
    const userArticles = firebaseData.filter((articles) => articles.author === email);
    res.status(200).json({ articles: userArticles });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user articles' });
  }
}