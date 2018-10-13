
class Profile{

    key: number;
    username: String;
    fName: String;
    lName: String;
    email: String;
    bio: String;
    dob: String;
    gender: String;
    lang: String;
    city: String;
    state: String;

    constructor (key: number,username: String, fName: String, lName: String, email: String, bio: String, dob: String, gender: String, lang: String, city: String, state: String){
        this.key = key;
        this.username = username;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.bio = bio;
        this.dob = dob;
        this.gender = gender;
        this.lang = lang;
        this.city = city;
        this.state = state;

    }

}