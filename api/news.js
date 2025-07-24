export default async function handler(req, res) {
  const response = await fetch("https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=5&apiKey=0b1c75c9a73f40a19e9fc4b2ffdb8c8c");
  const data = await response.json();
  res.status(200).json(data);
}