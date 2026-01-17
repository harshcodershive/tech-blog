import fs from "fs";
import path from "path";

const GENERATED_DIR = path.join(process.cwd(), "data", "tools");
const REVIEWS_TS_PATH = path.join(process.cwd(), "lib", "reviews-data.ts");

const START_MARKER = "// 🔽 AUTO-INSERT-START";
const END_MARKER = "// 🔼 AUTO-INSERT-END";

const INDENT = "    "; // 4 spaces

function formatArray(arr, indentLevel = 2) {
    const indent = INDENT.repeat(indentLevel);
    const innerIndent = INDENT.repeat(indentLevel + 1);

    return `[\n${arr
        .map((item) => `${innerIndent}"${item}"`)
        .join(",\n")}\n${indent}]`;
}

function formatReview(review) {
    const i = INDENT.repeat(2);
    const ii = INDENT.repeat(3);

    return `
${i}{
${ii}slug: "${review.slug}",
${ii}title: "${review.title}",
${ii}tagline: "${review.tagline}",
${ii}rating: ${review.rating},
${ii}category: "${review.category}",
${ii}description: ${JSON.stringify(review.description)},
${ii}summary: ${JSON.stringify(review.summary)},
${ii}verdict: "${review.verdict}",
${ii}pros: ${formatArray(review.pros)},
${ii}cons: ${formatArray(review.cons)},
${ii}features: ${formatArray(review.features)},
${ii}officialLink: "${review.officialLink}"
${i}},
`;
}

if (!fs.existsSync(GENERATED_DIR)) {
    console.log("ℹ️ data/tools directory does not exist.");
    process.exit(0);
}

if (!fs.existsSync(REVIEWS_TS_PATH)) {
    console.error("❌ lib/reviews-data.ts not found");
    process.exit(1);
}

const generatedFiles = fs
    .readdirSync(GENERATED_DIR)
    .filter((f) => f.endsWith(".json"));

if (generatedFiles.length === 0) {
    console.log("ℹ️ No generated reviews found.");
    process.exit(0);
}

let reviewsTs = fs.readFileSync(REVIEWS_TS_PATH, "utf-8");

const startIndex = reviewsTs.indexOf(START_MARKER);
const endIndex = reviewsTs.indexOf(END_MARKER);

if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    console.error("❌ AUTO-INSERT markers not found or invalid");
    process.exit(1);
}

const before = reviewsTs.slice(0, startIndex + START_MARKER.length);
const middle = reviewsTs.slice(
    startIndex + START_MARKER.length,
    endIndex
);
const after = reviewsTs.slice(endIndex);

let updatedMiddle = middle;

for (const file of generatedFiles) {
    const reviewPath = path.join(GENERATED_DIR, file);
    const review = JSON.parse(fs.readFileSync(reviewPath, "utf-8"));

    if (reviewsTs.includes(`slug: "${review.slug}"`)) {
        console.log(`⚠️ Review already exists: ${review.slug}`);
        continue;
    }

    updatedMiddle += formatReview(review);
    console.log(`✅ Integrated: ${review.slug}`);
}

const finalContent = `${before}${updatedMiddle}\n${after}`;

fs.writeFileSync(REVIEWS_TS_PATH, finalContent, "utf-8");

console.log("🎉 lib/reviews-data.ts updated with proper formatting");
