const path = require("path");
const fs = require("fs");

const BaseDir = path.resolve(__dirname, "../");
const ClientDir = path.join(BaseDir, "src", "app");
const ServerDir = path.join(BaseDir, "src", "server");
const DistDir = path.join(BaseDir, "dist/");
const PublicDir = path.join(ClientDir, "public/");

if (!fs.existsSync(DistDir)) {
  const distClient = path.join(DistDir, "client");
  fs.mkdirSync(DistDir);
  fs.mkdirSync(distClient);
}

module.exports = {
  client: ClientDir,
  server: ServerDir,
  dist: DistDir,
  clientDist: path.join(DistDir, "client/"),
  HTMLTemplate: path.join(PublicDir, "index.html"),
  Logo: path.join(PublicDir, "favicon.svg"),
  SW: path.join(ClientDir, "sw.ts"),
  tsconfigServer: path.join(BaseDir, "config", "tsconfig.server.json"),
  tsconfigClient: path.join(BaseDir, "config", "tsconfig.client.json")
};
