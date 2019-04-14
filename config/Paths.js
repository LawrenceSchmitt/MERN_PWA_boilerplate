const path = require("path");

const BaseDir = path.resolve(__dirname, "../");
const ClientDir = path.join(BaseDir, "app");
const ServerDir = path.join(BaseDir, "server");
const DistDir = path.join(BaseDir, "dist/");
const PublicDir = path.join(ClientDir, "public/");

module.exports = {
  client: ClientDir,
  server: ServerDir,
  dist: DistDir,
  clientDist: path.join(DistDir, "client/"),
  HTMLTemplate: path.join(PublicDir, "index.html"),
  Logo: path.join(PublicDir, "assets", "Logo.png"),
};
