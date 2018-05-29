const proc = require("child_process");
const fs = require("fs");
const trianglify = require("trianglify");

var uri = trianglify({
  height: 1200,
  width: 1920,
  cell_size: Math.random() * 40 + 60, // Between 60 and 100
  x_colors: "random",
  variance: Math.random() * 60 + 40 // Between 60 and 100
}).png();

// Strip off the uri part of the data uri, leaving the data
var data = uri.substr(uri.indexOf("base64") + 7);

// Decode the base64 encoded blob into a buffer
var buffer = Buffer.from(data, "base64");

// OSX will pick up the changes if filename changes every time
random_filename =
  "wallpaper-" +
  Math.random()
    .toString(36)
    .substring(7) +
  ".png";

// Remove any existing wallpaper files
proc.execSync("rm " + process.cwd() + "/wallpaper-*.png");

// Write the new file
fs.writeFileSync(random_filename, buffer);

// Tell OSX to set the new wallpaper
proc.spawnSync("osascript", [
  "-e",
  'tell application "System Events" to set picture of every desktop to POSIX file "' +
    process.cwd() +
    "/" +
    random_filename +
    '"'
]);

console.log("Updated wallpaper to " + random_filename);
