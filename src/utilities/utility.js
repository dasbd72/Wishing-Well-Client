var imgDistPath = "img";

export function getImgPath(img) {
  var ret = "";
  switch (img) {
    case "wishing-well-logo":
      ret = imgDistPath + "/logo.jpeg";
      break;
  }
  console.log("Getting Image: " + ret);
  return ret;
}
