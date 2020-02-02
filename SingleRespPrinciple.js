// SOLID design principle - Single Responsibility principle


class Employee{

  constructor(name, address){
    this.name =  name;
    this.address =  address;
  }

 getName(){

 }

 getAddress(){

 }

 toString(){

 }

// This violates the SRP as the class was fine when it was getting and setting properties but persisting it is a different responsibility. Specifying it in this class means you are tying it to the persisting mechanism.

//  saveName(){
//fs,mongo,TypeOrm etc
//  }
}

//Instead use another class to handle persistance

class PersistanceManager{
  preprocess(){

  }

  saveToFile(entity, fileLoc ){
    //fs.writeFileSync(fileLoc, entity.toString())

  }

}

//Use

const employee = new Employee('Sam', 'New Orleans');
const persist =  new PersistanceManager();
persist.saveToFile(employee, './loc');
