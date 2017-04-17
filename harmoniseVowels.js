/**
 * Transform characters from Finnish words using vowel harmony rules.
 * e.g. nominative + ('a').harmoniseVowels(nominative);
 * Disclaimer: This was an exercise to learn Finnish, and should not be treated as a reliable way to transform Finnish
 *
 * @param ref Usually the nominative form of the word which will be our guide to how we convert the string
 * @return string
 * @author matt.pike
 */
String.prototype.harmoniseVowels = function(ref){
  if(ref.lastIndexOf('ä')>=0 || ref.lastIndexOf('ö')>=0 || ref.lastIndexOf('y')>=0){
    return this.replace('a', 'ä').replace('o', 'ö');
  }else{
    return this.replace('ä', 'a').replace('ö', 'o');
  }
}