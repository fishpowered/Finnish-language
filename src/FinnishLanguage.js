/**
* Helper functions for working with the Finnish language.
* 
* Disclaimer: This is a hobby project to learn a bit of Finnish and brush up on my Javascript, also
* languages tend to have a lot of exceptions to the standard grammar rules that are hard to cover without
* hardcoding dictionaries of words.
*
* @todo Check JS doc and coding standards
* @todo lots of coding left to fin(n)ish
*
* @author matt.pike
* @package FinnishLanguage
*/
class FinnishLanguage {

	/**
	* Get the vowels as an array
	*
	* @return string[]
	*/
	static getVowels = function(){
		return ['a','e','i','o','u','y','ä','ö','å'];
	}

	/**
	* Get the consonants as an array
	*
	* @return string[]
	*/
	static getConsonants = function(){
		return ['b','c','d','f','g','h','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];
	}

	/**
	* Get the numeric verb type of a Finnish verb
	*
	* @return int
	*/
	static getVerbType = function(infinitive){
		var vowels = FinnishLanguage.getVowels();
		var lastLetter = infinitive.substr(-1);
		var secondToLastLetter = infinitive.substr(-2, 1);
		var thirdToLastLetter = infinitive.substr(-3, 1);
		if(infinitive.length < 3){
			throw 'Not a verb';
		}
		var lastLetterIsAVowel = vowels.indexOf(lastLetter) >= 0;
		var secondToLastLetterIsAVowel = vowels.indexOf(secondToLastLetter) >= 0;
		var thirdToLastLetterIsAVowel = vowels.indexOf(thirdToLastLetter) >= 0;
		if(lastLetterIsAVowel && secondToLastLetterIsAVowel){
			// Type 1 verbs end in a double vowel
			return 1;
		}else if(secondToLastLetter=='d' && (lastLetter=='a' || lastLetter=='ä')){
			// Type 2 verbs end in da or dä
			return 2;
		}else if(secondToLastLetter=='l' && (lastLetter=='a' || lastLetter=='ä')){
			// Type 3 verbs end in la or lä
			return 3;
		}else if((thirdToLastLetter=='a' || thirdToLastLetter=='ä' || thirdToLastLetter=='u' || thirdToLastLetter=='o') && secondToLastLetter=='t' && (lastLetter=='a' || lastLetter=='ä')){
			// Type 4 verbs end in ata, ätä, uta or ota
			return 4;
		}else if(thirdToLastLetter=='i' && secondToLastLetter=='t' && (lastLetter=='a' || lastLetter=='ä')){
			// Type 4 verbs end in ata, ätä, uta or ota
			return 5;
		}else{
			throw 'Unexpected verb "'+infinitive+'", is it in the infinitive form?';
		}
	}

	/**
	* Transform characters from Finnish words using vowel harmony rules.
	*
	* @param String lettersToHarmonise
	* @param String ref Usually the nominative form of the word which will be our guide to how we convert the string
	* @return string
	*/
	static harmoniseVowels = function(lettersToHarmonise, ref){
		if(ref.lastIndexOf('ä')>=0 || ref.lastIndexOf('ö')>=0 || ref.lastIndexOf('y')>=0){
			return lettersToHarmonise.replace('a', 'ä').replace('o', 'ö');
		}else{
			return lettersToHarmonise.replace('ä', 'a').replace('ö', 'o');
		}
	}

	/**
	* Transform a Finnish word in the infinitive form into imperative e.g. tulla -> tule
	*
	* @param string infinitive
	* @return string
	*/
	static transformInfinitivetoImperative = function(infinitive){
		var vowels = FinnishLanguage.getVowels();
		var lastLetter = infinitive.substr(-1);
		var secondToLastLetter = infinitive.substr(-2, 1);
		if(nominative.length < 3){
			return infinitive;
		}
		var lastLetterIsAVowel = vowels.indexOf(lastLetter) >= 0;
		var secondToLastLetterIsAVowel = vowels.indexOf(secondToLastLetter) >= 0;
		if(lastLetterIsAVowel && secondToLastLetterIsAVowel){
			// Type 1 verbs e.g. istua -> istu
			return infinitive.substr(0, -1);
		}else if(secondToLastLetter=='d' && (lastLetter=='a' || lastLetter=='ä')){
			// Type 2 verbs e.g. syödä -> syö
			return infinitive.substr(0, -1);
		}else{
			throw 'TODO!';
		}
	}

	/**
	* Transform a Finnish word in the nominative form into partitive.
	* Disclaimer: It is not possible for this function to be 100% accurate without a word database,
	* see notes on words ending with "i"
	*
	* @param String nominative
	* @return String
	*/
	static transformNominativeToPartitive = function(nominative){
		var vowels = FinnishLanguage.getVowels();
		var lastLetter = nominative.substr(-1);
		var secondToLastLetter = nominative.substr(-2, 1);
		if(nominative.length < 3){
			return nominative;
		}
		var lastLetterIsAVowel = vowels.indexOf(lastLetter) >= 0;
		var secondToLastLetterIsAVowel = vowels.indexOf(secondToLastLetter) >= 0;

		if(nominative.substr(-3) == 'nen'){
			return nominative.substr(0, nominative.length-3) + FinnishLanguage.harmoniseVowels('sta', lastLetter); // e.g. punainen -> punaista
		}else if(lastLetterIsAVowel && secondToLastLetterIsAVowel){
			return nominative + FinnishLanguage.harmoniseVowels('ta', lastLetter); // e.g. suklaa -> suklaata
		}else if(lastLetterIsAVowel && !secondToLastLetterIsAVowel){
			if(lastLetter == 'o' || lastLetter == 'ö' || lastLetter == 'a' || lastLetter == 'ä' || lastLetter == 'u'){
				return nominative + FinnishLanguage.harmoniseVowels('a', lastLetter); // e.g. talo -> taloa, pyörä -> pyörää
			}else if(lastLetter == 'e'){
				return nominative + FinnishLanguage.harmoniseVowels('tta', nominative); // e.g. huone -> huonetta
			}else if(lastLetter == 'i'){
				// Resolving words with -i endings...
				// "If the word is a loan word (a word from another language), the vowel does not change" - "From Start To Finnish", Leila White
				// Extract from official Finnish grammar guide...
				// 1) Find out if the final -i changes to -e in the genitve stem or remains -i
				// if the final -i changes to -e AND does NOT end in -hi, -ri, -li, -ni, -si use -e
				// if the final -i changes to -e and DOES end in -hi, -ri, -li, -ni, -si use partitive singular  stemp without the -e and ta or tä
				// if the final -i remains -i use the partitive singular stem retaining the final -i plus -a or -ä
				var loanWords = ['banaani','posti','pankki','turisti','ministeri','kahvi','laki','pappi','muki','siili'];
				var thirdToLastLetter = nominative.substr(-3, 1);
				if(loanWords.indexOf(nominative) >=0){
					return nominative + FinnishLanguage.harmoniseVowels('a', lastLetter); // e.g banaani -> banaania
				}else if(nominative.substr(-3)=='eni'){
					return nominative.substr(0, nominative.length-1) + 'tä'; // e.g. pieni -> pientä
				}else if(secondToLastLetter=='s' && (thirdToLastLetter=='u' || thirdToLastLetter=='o')){
					return nominative.substr(0, nominative.length-2) + 'tta'; // e.g. vuosi -> vuotta
				}else if(secondToLastLetter=='s' && thirdToLastLetter=='e'){
					return nominative.substr(0, nominative.length-2) + 'ttä'; // e.g. vuosi -> vuotta
				}else if(secondToLastLetter=='r' && lastLetter=='i'){
					return nominative.substr(0, nominative.length-2) + 'ta'; // e.g. vuosi -> vuotta
				}else{
					return nominative.substr(0, nominative.length-1) + FinnishLanguage.harmoniseVowels('ea', nominative); // e.g. suomi -> suomea
				}
			}else{
				throw 'Functionality not implemented yet.';
			}
		}else if(!lastLetterIsAVowel){
			return nominative + ('ta').harmoniseVowels(lastLetter); // e.g. poikkeus -> poikkeusta
		}else{
			throw "Cannot turn ''"+nominative+"'' into a partitive.";
		}
	}
}
