class AddContact {
    //fields
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //Constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    //Getters & Setters
    //Methods
    toString() {
        return '[ FirstName : ' + this.firstName + ' LastName : ' + this.lastName + ' Address : '
            + this.address + ' City : ' + this.city + ' State : ' + this.state + ' Zip : ' + this.zip +
            ' Phone Number : ' + this.phoneNumber + ' Email : ' + this.email + ' ]';
    }
}
let contact = new Contact("Deepanshu", "Singh", "sample address", "Ghaziabad", "Uttar Pradesh", 201201, 9536985460, "dsanimm@gmail.com");
console.log(contact.toString());