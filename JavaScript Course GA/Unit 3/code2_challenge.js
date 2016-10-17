var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var findContact = function(index) {
    return contacts[index];
};

var updateLastContact = function(newName) {
    contacts[contacts.length - 1] = newName;
};

var addContact = function(name) {
    contacts.push(name);
};


console.log(findContact(2));
updateLastContact("Patty Davis");
addContact("Mark Jones");
console.log(contacts);


// Second part of lesson 2 code challege 'glorp' is below.

var glorp = function(someNumber) {
    return someNumber * 5 - 3;
};

var result1 = glorp(10);
console.log(result1);

var result2 = 2 * (glorp(5) + 10); console.log(result2);

var result3 = glorp(1 + 2); console.log(result3);

var result4 = glorp(glorp(1)); console.log(result4);
