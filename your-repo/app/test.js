const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/health",
  method: "GET",
};

const req = http.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    if (data.trim() === "OK") {
      console.log("Health check passed");
      process.exit(0);
    } else {
      console.error("Health check failed:", data);
      process.exit(1);
    }
  });
});

req.on("error", (e) => {
  console.error("Request error", e);
  process.exit(1);
});

req.end();
