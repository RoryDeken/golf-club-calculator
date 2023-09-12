package clubcalculator;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class ClubNotFoundAdvice {

	@ResponseBody
	@ExceptionHandler(ClubNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String clubNotFoundHandler(ClubNotFoundException ex) {
		return ex.getMessage();
	}
}
