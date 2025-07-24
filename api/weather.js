export default async function handler(req, res) {
  const response = await fetch("https://api.weatherapi.com/v1/current.json?key=145f1fe14a0544cd9ec133705252407&q=Munich");
  const data = await response.json();
  res.status(200).json(data);
}