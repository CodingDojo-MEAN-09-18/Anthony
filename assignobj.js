// this prints the key and value
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for (var element in students){
    console.log(students[element]);
    
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
for (const key in users) {
    console.log(key.toUpperCase());
    for (let i = 0; i < users[key].length; i++) {
        const num = i + 1;
        // the line above counts for your list and ends once the for loop as a whole ends
        const fname = users[key][i].first_name;
        // the line above selects the first name from the object
        const lname = users[key][i].last_name;
        const length = fname.length + lname.length;
        // the line above counts the characters in a word and adds the first and last names
        console.log(`${num} - ${lname}, ${fname} - ${length}`);
    }
};



