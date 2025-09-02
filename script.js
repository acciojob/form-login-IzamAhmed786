function getFormvalue(event) {
    //Write your code here
	      event.preventDefault();
let firstName = document.forms["nameForm"]["fname"].value.trim();
      let lastName = document.forms["nameForm"]["lname"].value.trim();
	      let fullName = firstName + " " + lastName;
 if (!firstName && !lastName) {
        alert("Please enter your first name and last name.");
        return;
      } else if (!firstName) {
        alert("Please enter your first name.");
        return;
      } else if (!lastName) {
        alert("Please enter your last name.");
        return;
      }
	      alert(fullName);

}
