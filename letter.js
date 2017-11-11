var Letter = function(l){
	this.guessed = false;
	this.character = l;
	this.isGuessed =function(){
		this.guessed = true;
	}
}

module.exports = Letter