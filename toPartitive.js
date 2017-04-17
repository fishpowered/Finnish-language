/**
 * Transform a Finnish word in the nominative form into partitive.
 * Disclaimer: It is not possible for this function to be 100% accurate without a database
 * of Finnish words that are borrowed from foreign languages.
 *
 * @return string
 * @author matt.pike
 */
String.prototype.toPartitive = function(){
  var vowels = ['a','e','i','o','u','y','ä','ö'];
  var lastLetter = this.substr(-1);
  var secondToLastLetter = this.substr(-2, 1);
  var nominative = this.toString();
  if(this.length < 3){
    return nominative;
  }
  var lastLetterIsAVowel = vowels.indexOf(lastLetter) >= 0;
  var secondToLastLetterIsAVowel = vowels.indexOf(secondToLastLetter) >= 0;

  if(nominative.substr(-3) == 'nen'){
    return nominative.substr(0, nominative.length-3) + ('sta').harmoniseVowels(lastLetter); // e.g. punainen -> punaista
  }else if(lastLetterIsAVowel && secondToLastLetterIsAVowel){
    return nominative + ('ta').harmoniseVowels(lastLetter); // e.g. suklaa -> suklaata
  }else if(lastLetterIsAVowel && !secondToLastLetterIsAVowel){
    if(lastLetter == 'o' || lastLetter == 'ö' || lastLetter == 'a' || lastLetter == 'ä' || lastLetter == 'u'){
      return nominative + ('a').harmoniseVowels(lastLetter); // e.g. talo -> taloa, pyörä -> pyörää
    }else if(lastLetter == 'e'){
      return nominative + ('tta').harmoniseVowels(nominative); // e.g. huone -> huonetta
    }else if(lastLetter == 'i'){
	  // Resolving words with -i endings...
      // "If the word is a loan word (a word from another language), the vowel does not change" - "From Start To Finnish", Leila White
	  // Extract from official Finnish grammar guide...
	  // 1) Find out if the final -i changes to -e in the genitve stem or remains -i
	  // if the final -i changes to -e AND does NOT end in -hi, -ri, -li, -ni, -si use -e
	  // if the final -i changes to -e and DOES end in -hi, -ri, -li, -ni, -si use partitive singular  stemp without the -e and ta or tä
	  // if the final -i remains -i use the partitive singular stem retaining the final -i plus -a or -ä
      var loanWords = ['banaani','posti','pankki','turisti','ministeri','kahvi','laki','pappi','muki','siili'];
      var thirdToLastLetter = this.substr(-3, 1);
      if(loanWords.indexOf(nominative) >=0){
        return nominative + ('a').harmoniseVowels(lastLetter); // e.g banaani -> banaania
      }else if(nominative.substr(-3)=='eni'){
        return nominative.substr(0, nominative.length-1) + 'tä'; // e.g. pieni -> pientä
      }else if(secondToLastLetter=='s' && (thirdToLastLetter=='u' || thirdToLastLetter=='o')){
        return nominative.substr(0, nominative.length-2) + 'tta'; // e.g. vuosi -> vuotta
      }else if(secondToLastLetter=='s' && thirdToLastLetter=='e'){
        return nominative.substr(0, nominative.length-2) + 'ttä'; // e.g. vuosi -> vuotta
      }else if(secondToLastLetter=='r' && lastLetter=='i'){
        return nominative.substr(0, nominative.length-2) + 'ta'; // e.g. vuosi -> vuotta
      }else{
        return nominative.substr(0, nominative.length-1) + ('ea').harmoniseVowels(nominative); // e.g. suomi -> suomea
      }
    }else{
		throw 'Functionality not implemented yet.';
	}
  }else if(!lastLetterIsAVowel){
    return nominative + ('ta').harmoniseVowels(lastLetter); // e.g. poikkeus -> poikkeusta
  }else{
    throw "Cannot turn ''"+this.toString()+"'' into a partitive.";
  }
}
