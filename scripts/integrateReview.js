import fs from "fs";
import path from "path";

/**
 * ✅ PATHS (UPDATED FOR YOUR STRUCTURE)
 */
const GENERATED_DIR = path.join(process.cwd(), "data", "tools");
const REVIEWS_TS_PATH = path.join(
    process.cwd(),
    "lib",
    "reviews-data.ts"
);

/**
 * Read all generated JSON files
 */
if (!fs.existsSync(GENERATED_DIR)) {
    console.log("ℹ️ data/tools directory does not exist.");
    process.exit(0);
}

const generatedFiles = fs
    .readdirSync(GENERATED_DIR)
    .filter((file) => file.endsWith(".json"));

if (generatedFiles.length === 0) {
    console.log("ℹ️ No generated reviews found in data/tools.");
    process.exit(0);
}

/**
 * Load existing reviews-data.ts
 */
if (!fs.existsSync(REVIEWS_TS_PATH)) {
    console.error("❌ lib/reviews-data.ts not found");
    process.exit(1);
}

let reviewsTs = fs.readFileSync(REVIEWS_TS_PATH, "utf-8");

/**
 * Marker validation
 */
const START_MARKER = "// 🔽 AUTO-INSERT-START";
const END_MARKER = "// 🔼 AUTO-INSERT-END";

if (!reviewsTs.includes(START_MARKER) || !reviewsTs.includes(END_MARKER)) {
    console.error("❌ AUTO-INSERT markers not found in lib/reviews-data.ts");
    process.exit(1);
}

/**
 * Insert each review safely
 */
for (const file of generatedFiles) {
    const reviewPath = path.join(GENERATED_DIR, file);
    const review = JSON.parse(fs.readFileSync(reviewPath, "utf-8"));

    // Duplicate protection
    if (reviewsTs.includes(`slug: "${review.slug}"`)) {
        console.log(`⚠️ Review already exists: ${review.slug}`);
        continue;
    }

    const reviewAsTs = `
  {
    slug: "${review.slug}",
    title: "${review.title}",
    tagline: "${review.tagline}",
    rating: ${review.rating},
    category: "${review.category}",
    description: ${JSON.stringify(review.description)},
    summary: ${JSON.stringify(review.summary)},
    verdict: "${review.verdict}",
    pros: ${JSON.stringify(review.pros, null, 4)},
    cons: ${JSON.stringify(review.cons, null, 4)},
    features: ${JSON.stringify(review.features, null, 4)},
    officialLink: "${review.officialLink}"
  },
`;

    reviewsTs = reviewsTs.replace(
        new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, "m"),
        `${START_MARKER}
${reviewAsTs}
  ${END_MARKER}`
    );

    console.log(`✅ Integrated: ${review.slug}`);
}

/**
 * Write back updated reviews-data.ts
 */
fs.writeFileSync(REVIEWS_TS_PATH, reviewsTs, "utf-8");

console.log("🎉 lib/reviews-data.ts updated successfully");
