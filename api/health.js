
module.exports = (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://yazdanmadadiafghanicoin.github.io"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed"
    });
  }

  return res.status(200).json({
    ok: true,
    app: "AfghanRide",
    message: "API is running",
    version: "0.1"
  });
};
