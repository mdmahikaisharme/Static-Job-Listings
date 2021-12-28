const fs = require("fs");
const path = require("path");

function importData(dir) {
    const dirList = fs.readdirSync(dir);
    let contentImport = "";
    let contentExport = " ";

    dirList.forEach((file) => {
        if (file.endsWith(".js")) return;

        const fileName = file.split(".")[0];
        const name = formatName(fileName);
        contentImport += `import ${name} from "./${file}";\n`;
        contentExport += `${name}, `;
    });

    return `${contentImport} \nconst img = {${contentExport}}; \nexport default img;`;
}

function formatName(name) {
    const array = name.split(/[-_\s]/g);

    const formatedName = array.map((name, index) => {
        if (index !== 0) {
            const head = name[0].toUpperCase();
            const tail = name.slice(1);
            return head + tail;
        }
        return name;
    });

    return formatedName.join("");
}

const __dir = path.resolve(process.cwd());
const content = importData(__dir);

fs.writeFileSync(path.join(__dir, "index.js"), content, "utf-8");
