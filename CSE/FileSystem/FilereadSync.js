const fs = require("fs");

// Writing to the file
fs.writeFileSync("./data1.txt", "Hello Abes", "UTF-8");
fs.writeFileSync("./data1.txt", "Hello Abesec", "UTF-8");

// Appending to the file
fs.appendFileSync("./data1.txt", "Hello Abesec", "UTF-8");

// Renaming the file
fs.renameSync("./data1.txt", "./data3.txt");

// Reading the file
const data = fs.readFileSync("./data3.txt", "utf-8");
console.log("File Content:", data);

// Checking if the file contains "H" and replacing it
if (data.includes("H")) { // Using `includes()` instead of `match()`
    console.log("File contains 'H'");

    const newdata = data.replace("H", "ABES"); // Correcting replacement
    fs.writeFileSync("./data3.txt", newdata, "utf-8");

    console.log("Updated file content:", fs.readFileSync("./data3.txt", "utf-8"));
}

// Deleting the file (Uncomment if needed)
// fs.unlinkSync("./data3.txt");
