import fs from "fs";

function countWords(inputFile) {
    try {
        const data = fs.readFileSync(inputFile, "utf-8");
        const words = data.trim().split(" ");
        const wordCount = words.length;

        fs.writeFileSync("outputFile.txt", `Word Count: ${wordCount}`);
        console.log("Word count written successfully");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

export default countWords;