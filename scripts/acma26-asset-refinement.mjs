import sharp from "sharp";
import assert from "node:assert/strict";

// Verify the original decoded artwork is preserved outside the deleted alif.
// The corrected PNG is lossless; re-encoding the full canvas as lossy WebP
// would invalidate this invariant even if the edit itself were local.
const root = "public/brand/acma26/";
const before = await sharp(root + "hero-panorama.webp")
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const after = await sharp(root + "hero-panorama-corrected.png")
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
assert.deepEqual(after.info, before.info);
let outsideChanges = 0;
let changed = 0;
for (let y = 0; y < 820; y++) {
  for (let x = 0; x < 1918; x++) {
    const i = (y * 1918 + x) * 3;
    if (
      [0, 1, 2].some(
        (channel) => before.data[i + channel] !== after.data[i + channel],
      )
    ) {
      changed++;
      if (x < 1292 || x >= 1325 || y < 196 || y >= 316) outsideChanges++;
    }
  }
}
assert.equal(outsideChanges, 0, "Artwork changed outside the surplus alif");
assert.ok(changed > 0, "Expected a local correction");
console.log({ changed, outsideChanges });
