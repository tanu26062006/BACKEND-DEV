import fs from "fs";

function borrowRecord(memberName, bookName, quantity) {
    try {
        let borrowRecords = [];

        let ob = {
            id: Date.now(),
            memberName,
            bookName,
            quantity
        };

        if (
            fs.existsSync("book.json") &&
            fs.existsSync("members.json")
        ) {
            let books = JSON.parse(fs.readFileSync("book.json", "utf-8"));
            let members = JSON.parse(fs.readFileSync("members.json", "utf-8"));

            let bookPrice = books.find(b => b.name === bookName);
            let memberType = members.find(m => m.name === memberName);

            if (!bookPrice || !memberType) {
                console.log("Book or Member not found");
                return;
            }

            if (fs.existsSync("borrowRecord.json")) {
                borrowRecords = JSON.parse(
                    fs.readFileSync("borrowRecord.json", "utf-8")
                );
            }

            borrowRecords.push(ob);
            fs.writeFileSync(
                "borrowRecord.json",
                JSON.stringify(borrowRecords, null, 2)
            );

            let total = bookPrice.price * quantity;

            if (memberType.type === "gold") {
                return Math.ceil((total * 15) / 100);
            } else {
                return Math.ceil((total * 5) / 100);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default borrowRecord;