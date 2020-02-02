/*



class Cricketer{
  bat(){
    console.log('I am batting');
  }
  field(){
    console.log('I can field');
  }
}

class Bowler extends Cricketer{
  bowl(){
    console.log('I am bowling');
  }
}

class Batsman extends Cricketer{
}

class Keeper extends Cricketer{
      keep(){
        console.log('I am keeping');
      }
      field(){
       throw new Error('I cannot field');
      }
    }

    const batsman = new Batsman();
    const wk = new Keeper();

function makeCricketerField(cricketer){
  cricketer.field()
}

makeCricketerField(batsman);
makeCricketerField(wk); -- GIVES ME ERROR even though wk inherits a Cricketer


*/

// SOLUTION



class Cricketer {
  bat() {
    console.log('I am batting');
  }
}

class KeepingCricketer extends Cricketer {

  keep() {
    console.log('I am keeping');
  }
}

class FieldingCricketer extends Cricketer {
  field() {
    console.log('I can field');
  }
}


class Bowler extends FieldingCricketer {
  bowl() {
    console.log('I am bowling');
  }
}

class Batsman extends FieldingCricketer {
}

class Keeper extends KeepingCricketer {
}

const batsman = new Batsman();
const wk = new Keeper();


function makeFieldingCricketerField(cricketer) {
  cricketer.field()
}

function makeKeepingCricketerkeep(cricketer) {
  cricketer.keep()
}

makeFieldingCricketerField(batsman);
makeKeepingCricketerkeep(wk);


// Say there is an alrounder who can do everything, how would you tackle that?
// That's the problem with inheritance. Then you need to so functional composition




