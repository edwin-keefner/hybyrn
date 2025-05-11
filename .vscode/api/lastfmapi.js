export default async function handler(req, res) {
  const { user = "hybyrn", limit = 10 } = req.query;
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${user}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=${limit}`
  );

  const data = await response.json();
  res.status(200).json(data);
}