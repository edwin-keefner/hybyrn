module.exports = async (req, res) => {
  const username = "hybyrn";
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${process.env.LAST_FM_API_KEY}&format=json&limit=1`
  );
  const data = await response.json();
  res.json(data);
};
