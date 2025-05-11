export default async function handler(req, res) {
  const { user = "hybyrn", limit = 10 } = req.query;
  const lastfmUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${user}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=${limit}`;

  try {
    const response = await fetch(lastfmUrl);
    const text = await response.text(); // Get raw response first
    console.log("Last.fm API response:", text); // Debug
    const data = JSON.parse(text); // Now parse
    res.status(200).json(data);
  } catch (error) {
    console.error("Last.fm API error:", error);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
}