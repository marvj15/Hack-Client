
export class Profile{

    key: number;
    username: String;
    fName: String;
    lName: String;
    email: String;
    bio: String;
    dob: Date;
    gender: String;
    lang: String;
    city: String;
    state: String;


    //original const  key: number,username: String, fName: String, lName: String, email: String, bio: String, dob: String, gender: String, lang: String, city: String, state: String
    constructor (data: any){
        this.key = data.profileID;
        this.username = data.userName;
        this.fName = data.firstName;
        this.lName = data.lastName;
        this.email = data.email;
        this.bio = data.bio;
        this.dob = data.dateOfBirth;
        this.gender = data.gender;
        this.lang = data.language;
        this.city = data.city;
        this.state = data.state;

    }


}