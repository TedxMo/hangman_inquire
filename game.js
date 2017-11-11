var inquirer = require('inquirer');
var Cho = require('./word');

 // var computerChoices = 	['abc','henry','starbucks','you','hunger', 'for', 'the', 'win', 'we', 'know', 'essential', 'reading', 'guide', 'movie', 'battles', 'kevin', 'jihn'];
   // var computerChoices =  ['aaa'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'
				  ,'`','!','@','#','$','%','^','&','*','('
				  ,')','_','-','+','=','{','[','}',']','|'
				  ,'"',"'",':',';',',','<','>','.','?','/'];
// var alphaChoices =['a','b','c','d','e'
//                   ,'f','g','h','i','j'
//                   ,'k','l','m','n','o'
//                   ,'p','q','r','s','t'
//                   ,'u','v','w','x','y','z'];  
var computerGuess = new Cho();
var count = 10;
var word_guessed = [];
console.log(computerGuess);
var hangman = '';
for (var i=0;i<computerGuess.word_choice.length;i++){
		hangman += '_ ';
}
menu();

function menu(){
	inquirer.prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Guess",
        "Show",
        "New Word",
        "End"
      ]
    }).then(function(ans){
    	switch(ans.action){
    		case 'Guess':
    		inquirer.prompt({
				name: "gu",
				type: "input",
				message: "Guess One Letter!!!",
				validate:function(input){
					var temp = input -2;
					if(input.length!=1){
						console.log('\nOnly 1 letter');
						return false;
					}else if(word_guessed.indexOf(input)!=-1){
						console.log('\n'+input+' has been used!');
						return false;
					}else if(numberArray.indexOf(input)!=-1){
						console.log('\n'+'No Numbers or Symbols!');
						return false;
					}
					else{
						word_guessed.push(input);
						// count--;
						return true;
					}
				}
    		}).then(function(ans){
    			guess(ans.gu);
    		})
    		break;
    		
    		case 'Show':
    		show();
    		break;

    		case 'New Word':
    		newWord();
    		break;
    		
    		case 'End':
    		end();
    	}

    })
}

function guess(g){
	// if(computerGuess.word_choice[g])
	count = computerGuess.guess_inside(g,count);
	check();
	if(count===0){
		console.log('You lost! Please try again!')
		newWord();
	}else if(hangman.indexOf('_')===-1){
		console.log("You Won! Let's try again!")
		newWord();
	}
	menu();
}

function check(){
	hangman = '';
	for (var i=0;i<computerGuess.word_choice.length;i++){
		if(!computerGuess.letters[i].guessed){
			hangman += '_ ';
		}else{
			hangman = hangman + computerGuess.letters[i].character +' ' 
		}
	}
}

function show(){
	console.log(hangman);
	console.log(computerGuess.word_choice)
	menu();
}

function newWord(){
	computerGuess = new Cho();
	console.log(computerGuess)
	check();
	menu();
}

function end(){
	
}