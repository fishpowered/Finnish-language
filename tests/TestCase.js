/**
 * Base test class
 *
 * @author matt.pike
 */
class TestCase{
	/**
	 * Assert an expected value matches an actual value
	 *
	 * @return bool
	 * @throws String
	 */
	static assertEquals(expected, actual){
		if(expected!=actual){
			throw "FAIL: '"+actual+"' is not equal to expected '"+expected+"'";
		}else{
			return true;
		}
	}
}
