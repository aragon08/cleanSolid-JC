(() => {

    // NO aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    interface PersonProps {
      birthdate: Date;
      name: string;
      gender: Gender;
    }


    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

      constructor({name, gender, birthdate}: PersonProps) {
        this.birthdate = birthdate;
        this.name = name;
        this.gender = gender;
        
      }
    }

    interface UserProps {
      birthdate: Date;
      email: string;
      gender: Gender;
      name: string;
      role: string;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({birthdate, email, gender, name, role,}: UserProps) {
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
      birthdate: Date;
      email: string;
      gender: Gender;
      lastOpenFolder: string;
      name: string;
      role: string;
      workingDirectory: string;
    }

    class UserSettings extends User {
      public workingDirectory: string;
      public lastOpenFolder: string;

      constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingsProps) {
        super({ email, role, name, gender, birthdate });
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
      }
    }

    
    // const newPerson = new Person('Juan Carlos', 'M', new Date('1989-01-30'));
    // console.log({newPerson});
    


})();