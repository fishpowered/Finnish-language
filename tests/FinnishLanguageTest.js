/**
 * Test assertions for FinnishLanguage
 *
 * @author matt.pike
 */
class FinnishLanguageTest extends TestCase {

	/**
	 * @covers FinnishLanguage.transformNominativeToPartitive
	 */
	static testTransformNominativeToPartitive(){
		let assertions = [
			['taloa', 'talo'],
			['poikaa', 'poika'],
			['juomaa', 'juoma'],
			['pyörää', 'pyörä'],
			['kukkaa', 'kukka'],
			['suklaata', 'suklaa'],
			['maata', 'maa'],
			['työtä', 'työ'], // työta = a job, a work
			['autoa', 'auto'],
			['leipää', 'leipä'],
			['liimaa', 'liima'], // glue
			['tukea', 'tuki'],
			['tyttöä', 'tyttö'],
			['tietokonetta', 'tietokone'],
			['önettä', 'öne'], // made up word
			['poikkeusta', 'poikkeus'],
			['satua', 'satu'],
			['verhoa', 'verho'], // a curtain
			['hakijaa', 'hakija'], // an applicant
			['haltijaa', 'haltija'], // an elf
			['askelta', 'askel'], // a step
			['rikasta', 'rikas'],
			['ajatusta', 'ajatus'],
			['saksalaista', 'saksalainen'],
			['punaista', 'punainen'],

			// Resolving words with -i endings...
			// 1) Find out if the final -i changes to -e in the genitve stem or remains -i
			// if the final -i changes to -e AND does NOT end in -hi, -ri, -li, -ni, -si use -e
			// if the final -i changes to -e and DOES end in -hi, -ri, -li, -ni, -si use partitive singular  stemp without the -e and ta or tä
			// if the final -i remains -i use the partitive singular stem retaining the final -i plus -a or -ä
			['kahvia', 'kahvi'],
			['lakia', 'laki'],
			['pappia', 'pappi'],
			['banaania', 'banaani'],
			['postia', 'posti'],
			['pankkia', 'pankki'],
			['turistia', 'turisti'],
			['ministeria', 'ministeri'],
			['pappia', 'pappi'],
			['suomea', 'suomi'],
			['tukea', 'tuki'],
			['mukia', 'muki'],
			['pientä', 'pieni'],
			['vettä', 'vesi'],
			['vuotta', 'vuosi'],
			['siilia', 'siili'],
			['hiiltä', 'hiili'],
			['lehteä', 'lehti'],
			['kieltä', 'kieli'],
			['uutta', 'uusi'],
			['vettä', 'vesi'],
			['vuotta', 'vuosi'],
			['kuukautta', 'kuukausi'],
			['suurta', 'suuri'],
			['saarta', 'saari']
		];
		assertions.forEach(assertion => {
			assertEquals(assertion[0], assertion[1]);
		});
	}

	/**
	 * @covers FinnishLanguage.transformInfinitivetoImperative
	 */
	static testTransformInfinitivetoImperative(){
		throw "Test not complete";
	}
}

/**
 * Assert an expected value matches an actual value
 *
 * @return bool
 * @throws String
 */
function assertEquals(expected, actual){
	if(expected!=actual){
		throw "ERROR: actual:"+actual+" is not equal to expected:"+expected;
	}else{
		return true;
	}
}
