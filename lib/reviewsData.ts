import fs from "fs";
import path from "path";

export function getAllReviews() {
    const dir = path.join(process.cwd(), "data/tools");

    if (!fs.existsSync(dir)) return [];

    return fs.readdirSync(dir).map((file) => {
        const content = fs.readFileSync(
            path.join(dir, file),
            "utf-8"
        );
        return JSON.parse(content);
    });
}
