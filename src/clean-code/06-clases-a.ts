(()=>{
    
    //con errores de herencia
    
    type Gender ="M"|"F";
/*
    class Person{
        public main :string;
        public gender:Gender;
        public birthdate:Date;

        constructor(main: string,gender: Gender, birthdate: Date){
            this.birthdate =birthdate;
            this.gender = gender;
            this.main = main;

        }
    }
    */

    class Person{

        constructor(
            public name: string,
            public gender: Gender, 
            public birthdate: Date){
        }
    }

    class User extends Person{

        public lastAcces: Date;

        constructor(
        public email: string,
        public role: string,
        name: string,
        gender: Gender, 
        birthdate: Date
        ){
            super(name, gender, birthdate);
            this.lastAcces = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender, 
            birthdate: Date
        ){
            super(email,role,name,gender,birthdate)
        }
    }

    const userSetting = new UserSettings("nome/src",
    "/home", 
    "victor@gmail.com",
    "dev", 
    "victor", 
    "M",
    new Date("1999-03-19"))
    console.log({ userSetting})

})();