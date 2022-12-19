(()=>{
    
//aplicando el principio de responsabilidad unica

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
        
        email: string;
        role: string;
    }
    class User{

        public email: string;
        public lastAcces: Date;
        public role: string;

        constructor({email, role}:UserProps
        ){
            this.email = email;
            this.lastAcces = new Date();
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps{
            lastOpenFolder: string;
            workingDirectory: string;
    }

    class Settings {

    public lastOpenFolder: string;
    public workingDirectory: string;

        constructor({
            lastOpenFolder, 
            workingDirectory}: SettingsProps 
        ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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
    class userSettings{

        public person : Person;
        public settings : Settings;
        public user : User;

        constructor({
            birthdate, gender, name,
            lastOpenFolder, workingDirectory,
            email, role 
        }: userSettingsProps){
            this.settings = new Settings({lastOpenFolder, workingDirectory});
            this.user = new User({email, role});
            this.person = new Person({birthdate, gender, name});
        }
    }

    const userSetting = new userSettings({
    workingDirectory : "nome/src",
    lastOpenFolder : "/home", 
    email : "victor@gmail.com",
    role : "dev", 
    name : "victor", 
    gender : "M",
    birthdate : new Date("1999-03-19")})

    console.log({ userSetting})
})();