
/**
 * Test assertions for FinnishLanguage
 *
 * @author matt.pike
 */
class FinnishLanguageTest extends TestCase {

	/**
	 * @covers FinnishLanguage.transformInfinitiveVerbToImperative
	 */
	static testTransformInfinitiveVerbToImperative_Type1(){
		let assertions = [
			['soi', 'soida'], // ring
			['aja', 'ajaa'], // drive
			['laula', 'laulaa'], // sing
			['tanssi', 'tanssia'], // dance
			['itke', 'itkeä'], // cry
			['osta', 'ostaa'], // buy
			// Consonant gradation...
			['tiedä', 'tietää'], // know
			['anna', 'antaa'], // give
			['soita', 'soittaa'], // call
			['nuku', 'nukkua'], // call
			['opi', 'oppia'], // learn
			['odota', 'odottaa'], // wait
			['lue', 'lukea'], // read
			['leivo', 'leipoa'], // bake
			['kiellä', 'kieltää'], // forbid
		];
		assertions.forEach(assertion => {
			let actual = FinnishLanguage.transformInfinitiveVerbToImperative(assertion[1]);
			TestCase.assertEquals(assertion[0], actual);
		});
	}

	/**
	 * @covers FinnishLanguage.consonantGradation
	 */
	static testConsonantGradation(){
		let assertions = [
			['tiedää', 'tietää'],
			['annaa', 'antaa'],
			['soitaa', 'soittaa'],
			['nukua', 'nukkua'],
			['opia', 'oppia'],
			['odotaa', 'odottaa'],
			['luea', 'lukea'],
			['leivoa', 'leipoa'],
			['kiellää', 'kieltää'],
			['ymmarrää', 'ymmartää'],
		];
		assertions.forEach(assertion => {
			let actual = FinnishLanguage.consonantGradation(assertion[1]);
			TestCase.assertEquals(assertion[0], actual);
		});
	}

	/**
	 * @covers FinnishLanguage.transformInfinitiveVerbToImperative
	 */
	static testTransformInfinitiveVerbToImperative_Type2(){
		let assertions = [
			['syö', 'syödä'],
			['juo', 'juoda'],
			['käy', 'käydä'],
		];
		assertions.forEach(assertion => {
			let actual = FinnishLanguage.transformInfinitiveVerbToImperative(assertion[1]);
			TestCase.assertEquals(assertion[0], actual);
		});
	}

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
			['uutta', 'uusi'],
			['vettä', 'vesi'],
			['vuotta', 'vuosi'],
			['kuukautta', 'kuukausi'],
			['lehteä', 'lehti'],
			['hiiltä', 'hiili'],
			['kieltä', 'kieli'],
			['suurta', 'suuri'],
			['saarta', 'saari']
		];
		assertions.forEach(assertion => {
			TestCase.assertEquals(assertion[0], FinnishLanguage.transformNominativeToPartitive(assertion[1]));
		});
	}
}
