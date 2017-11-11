var choices = ['abc','henry','starbucks','you','hunger', 'for', 'the', 'win', 'we', 'know', 'essential', 'reading', 'guide', 'movie', 'battles', 'kevin', 'jihn'];
// var choices = ['eeeeeee'];
var Letter = require('./letter')

var Word = function(){
	this.word_choice = choices[Math.floor(Math.random() * choices.length)];;
	this.letters = [];
	for (i in this.word_choice){
		this.letters.push(new Letter(this.word_choice[i]))
	}
	this.guess_inside = function(g,c){
		var num = this.word_choice.indexOf(g)
		var bool = false;
		
		while(num!=-1){
			this.letters[num].isGuessed();
			this.word_choice = this.word_choice.replace(g,'!');
			num = this.word_choice.indexOf(g)
			bool = true;
		}
		if(bool){
			console.log('You still have',c,'guesses left')
			
		}else{
			c--;
			console.log('Wrong! You have',c,'guesses left!');
		}
		return c;

	}
}



module.exports = Word;