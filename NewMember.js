import fs from "fs";

function NewMember(name, email, type) {
    try {
        let mem = [];

        let memObj = {
            id: Date.now(),
            name,
            email,
            type
        };

        if (fs.existsSync("members.json")) {
            mem = JSON.parse(fs.readFileSync("members.json", "utf-8"));

            let memcheck = mem.some(value => value.email === email);
            if (memcheck) {
                console.log("member already exists");
                return;
            }
        }

        mem.push(memObj);
        fs.writeFileSync("members.json", JSON.stringify(mem, null, 2));

    } catch (err) {
        console.log(err, "some error occurred");
    }
}

export default NewMember;