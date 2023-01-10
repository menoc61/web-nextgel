const cloudinary = require("cloudinary");
const _ = require("underscore");

const Q = require("q");

function upload(file) {
  cloudinary.config({
    cloud_name: "ditgi9w4s",
    api_key: "143734471285483",
    api_secret: "vnLN9FDIKi8L8MNRf1ziPM2scUo",
  });

  return new Q.Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      { width: 50, height: 50 },
      (err, res) => {
        if (err) {
          console.log("cloudinary err:", err);
          reject(err);
        } else {
          console.log("cloudinary res:", res);
          return resolve(res.url);
        }
      }
    );
  });
}

module.exports.upload = upload;
