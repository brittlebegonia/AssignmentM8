// CREATE AN ARRAY OF EMPLOYEES
"use strict";

let employees = [
    [10000001, "Melissa Green", 1234, "melissa@email.com", "Marketing"],
    [10000002, "John Smith", 2222, "john@email.com", "Sales"],
    [10000003, "Sarah Lee", 3333, "sarah@email.com", "Engineering"],
    [10000004, "David Cruz", 4444, "david@email.com", "QA"],
    [10000005, "Jessica Ray", 5555, "jess@email.com", "Executive"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("employees")) {
    employees = JSON.parse(localStorage.getItem("employees"));
}

// GET DOM ELEMENTS
const form = document.getElementById("addForm");
const empTable = document.getElementById("empTable");
const empCount = document.getElementById("empCount");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let extension = document.getElementById("extension").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id, name, extension, email, department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    if (e.target.classList.contains("delete")) {

    // CONFIRM THE DELETE
    if (confirm("Are you sure you want to delete this employee?")) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let row = e.target.parentNode.parentNode;
        let rowIndex = row.rowIndex - 1;

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex, 1);

        // BUILD THE GRID
        buildGrid();

        }
    }   
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};