import fs from "fs";

function addbook(name, title, author, price) {
    try {
        let data = [];

        let bookobj = {
            name,
            bookid: Date.now(),
            title,
            author,
            price
        };

        if (fs.existsSync("book.json")) {
            data = JSON.parse(fs.readFileSync("book.json", "utf-8"));

            let exists = data.some(value => value.name === name);
            if (exists) {
                console.log("book exists");
                return;
            }
        }

        data.push(bookobj);
        fs.writeFileSync("book.json", JSON.stringify(data, null, 2));

    } catch (err) {
        console.log(err);
    }
}

export default addbook;