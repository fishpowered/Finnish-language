/**
 * Test assertions for String.toPartitive()
 *
 * @author matt.pike
 */
 
function assertEquals(expected, actual){
  if(expected!=actual){
    throw "ERROR: actual:"+actual+" is not equal to expected:"+expected;
  }
}

assertEquals('taloa', 'talo'.toPartitive());
assertEquals('poikaa', 'poika'.toPartitive());
assertEquals('juomaa', 'juoma'.toPartitive());
assertEquals('pyörää', 'pyörä'.toPartitive());
assertEquals('kukkaa', 'kukka'.toPartitive());
assertEquals('suklaata', 'suklaa'.toPartitive());
assertEquals('maata', 'maa'.toPartitive());
assertEquals('työtä', 'työ'.toPartitive()); // työta = a job, a work
assertEquals('autoa', 'auto'.toPartitive());
assertEquals('leipää', 'leipä'.toPartitive());
assertEquals('liimaa', 'liima'.toPartitive()); // glue
assertEquals('tukea', 'tuki'.toPartitive());
assertEquals('tyttöä', 'tyttö'.toPartitive());
assertEquals('tietokonetta', 'tietokone'.toPartitive());
assertEquals('önettä', 'öne'.toPartitive()); // made up word
assertEquals('poikkeusta', 'poikkeus'.toPartitive());
assertEquals('satua', 'satu'.toPartitive());
assertEquals('verhoa', 'verho'.toPartitive()); // a curtain
assertEquals('hakijaa', 'hakija'.toPartitive()); // an applicant
assertEquals('haltijaa', 'haltija'.toPartitive()); // an elf
assertEquals('askelta', 'askel'.toPartitive()); // a step
assertEquals('rikasta', 'rikas'.toPartitive());
assertEquals('ajatusta', 'ajatus'.toPartitive());
assertEquals('saksalaista', 'saksalainen'.toPartitive());
assertEquals('punaista', 'punainen'.toPartitive());

// Resolving words with -i endings...
// 1) Find out if the final -i changes to -e in the genitve stem or remains -i
// if the final -i changes to -e AND does NOT end in -hi, -ri, -li, -ni, -si use -e
// if the final -i changes to -e and DOES end in -hi, -ri, -li, -ni, -si use partitive singular  stemp without the -e and ta or tä
// if the final -i remains -i use the partitive singular stem retaining the final -i plus -a or -ä
assertEquals('kahvia', 'kahvi'.toPartitive());
assertEquals('lakia', 'laki'.toPartitive());
assertEquals('pappia', 'pappi'.toPartitive());
assertEquals('banaania', 'banaani'.toPartitive());
assertEquals('postia', 'posti'.toPartitive());
assertEquals('pankkia', 'pankki'.toPartitive());
assertEquals('turistia', 'turisti'.toPartitive());
assertEquals('ministeria', 'ministeri'.toPartitive());
assertEquals('kahvia', 'kahvi'.toPartitive());
assertEquals('pappia', 'pappi'.toPartitive());
assertEquals('suomea', 'suomi'.toPartitive());
assertEquals('tukea', 'tuki'.toPartitive());
assertEquals('mukia', 'muki'.toPartitive());
assertEquals('pientä', 'pieni'.toPartitive());
assertEquals('vettä', 'vesi'.toPartitive());
assertEquals('vuotta', 'vuosi'.toPartitive());
assertEquals('siilia', 'siili'.toPartitive());
assertEquals('hiiltä', 'hiili'.toPartitive());
assertEquals('lehteä', 'lehti'.toPartitive());
assertEquals('kieltä', 'kieli'.toPartitive());
assertEquals('uutta', 'uusi'.toPartitive());
assertEquals('vettä', 'vesi'.toPartitive());
assertEquals('vuotta', 'vuosi'.toPartitive());
assertEquals('kuukautta', 'kuukausi'.toPartitive());
assertEquals('suurta', 'suuri'.toPartitive());
assertEquals('saarta', 'saari'.toPartitive());