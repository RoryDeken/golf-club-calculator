package clubcalculator;

class ClubNotFoundException extends RuntimeException {

	ClubNotFoundException(Long id) {
		super("Could not find club " + id);
	}
}
