// SOLID - open closed principle
// Should be open for extension but closed for modification

//Before Open closed

function printSurveyTemplate(questions){
  questions.forEach(question=>{
    console.log(question.description);
    switch(question.type){
      case 'yesno':
        console.log(`1.Yes`);
        console.log(`2.No`);
        break;
      case 'describe':
        console.log('Describe here: ____________________________________')
        break;
      case 'choose':
        question.options.forEach((option,index)=>console.log(`${index+1}.${option}`));
    /*    break;
      case 'range':
        console.log(`Maximum:________`)
        console.log(`Minimum:________`) */
    }
  })
}

const surveyquestions = [
  {type:'yesno',
  description: 'Have you voted?'
  }, {
    type: 'describe',
    description: 'What are you looking for in your government?'
  },{
    type:'choose',
    description: 'What is most important for you?',
    options: ['education','electricity','corruption']
  }
]

//printSurveyTemplate(surveyquestions);
/*
if I have to introduce new type : range with question say
{
 type: 'range',
  description: 'How much will you be able to pay for a new childen park?',
  }
I have to modify the printSurveyTemplate function as well.

  */


  //Solution:

  class ChooseQuestion{
    constructor(description, options){
      this.description =  description;
      this.options = options;
    }

    printQuestion(){
      this.options.forEach((option, index) => console.log(`${index + 1}.${option}`));
    }
  }

  class YesNoQuestion{
    constructor(description){
      this.description =  description;
    }

    printQuestion(){
      console.log(`1.Yes`);
      console.log(`2.No`);
    }
  }

  const newquestions = [
    new YesNoQuestion('Have you voted?'),
    new ChooseQuestion('What is most important for you?', ['education', 'electricity', 'corruption'])
  ]

 function printSurveyTemplate2(questions){
  questions.forEach(question=>{
    console.log(question.description);
    question.printQuestion();
  })
 }

printSurveyTemplate2(newquestions);


