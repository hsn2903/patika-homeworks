const fs = require("fs");

// Create
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    console.log(err);
  }
);

// Read
fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Update
fs.appendFile(
  "employees.json",
  '{"name": "Employee 2 Name", "salary2": 4000}',
  "utf-8",
  (err) => {
    console.log(err);
  }
);

fs.unlink("employees.json", (err) => {
  if (err) throw err;
  console.log("path/file.txt was deleted");
});
