const S = require("Scene");
const R = require("Reactive");
const M = require("Materials");
const SH = require("Shaders");

const uv = SH.functionVec2();

function texture2D(image, uv) {
  return SH.composition(image, uv);
}

function setTexture(material, texture) {
  material.setTexture(texture, { textureSlotName: "diffuseTexture" });
}

const color = R.pack4(1, 0, 0, 1);
const mat = M.get("material0");

setTexture(mat, texture2D(color, uv));
