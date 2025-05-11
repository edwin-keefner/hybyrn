export default async function handler(req, res) {
  //res.setHeader("Access-Control-Allow-Origin", "*");
  //res.setHeader("Content-Type", "application/json");

  try {
    const { user = "hybyrn", limit = 10 } = req.query;
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${user}&api_key=${process.env.LAST_FM_API_KEY}&format=json&limit=${limit}`;
    
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
}