(()=>{
    
    type Gender ="M"|"F";

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person{
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender,birthdate}:PersonProps){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps{
        
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }
    class User extends Person{

        public email: string;
        public lastAcces: Date;
        public role: string;

        constructor({name, gender, birthdate, email, role}:UserProps
        ){
            super({name, gender, birthdate});
            this.email = email;
            this.lastAcces = new Date();
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface userSettingsProps{
            birthdate: Date;
            email: string;
            gender: Gender; 
            lastOpenFolder: string;
            name: string;
            role: string;
            workingDirectory: string;
    }

    class UserSettings extends User {

    public lastOpenFolder: string;
    public workingDirectory: string;

        constructor({
            birthdate,
            email, 
            gender, 
            lastOpenFolder, 
            name, 
            role, 
            workingDirectory}: userSettingsProps 
        ){
            super({email,role,name,gender,birthdate});
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSetting = new UserSettings({
    workingDirectory : "nome/src",
    lastOpenFolder : "/home", 
    email : "victor@gmail.com",
    role : "dev", 
    name : "victor", 
    gender : "M",
    birthdate : new Date("1999-03-19")})

    console.log({ userSetting})
})();