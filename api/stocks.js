export default async function handler(req, res) {
  const symbols = ["AAPL", "MSFT", "GOOGL"];
  const results = [];

  for (const symbol of symbols) {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=7G0SE75620MX4XO3`);
    const data = await response.json();
    results.push(data["Global Quote"]);
  }

  res.status(200).json(results);
}