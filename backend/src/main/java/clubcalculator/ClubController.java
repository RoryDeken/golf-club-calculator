package clubcalculator;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;


@RestController
class ClubController {
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
	private final ClubRepository repository;

	ClubController(ClubRepository repository) {
		this.repository = repository;
	}

	@GetMapping("/clubs")
	CollectionModel<EntityModel<Club>> all() {

		List<EntityModel<Club>> clubs = repository.findAll().stream()
				.map(club -> EntityModel.of(club,
						linkTo(methodOn(ClubController.class).one(club.getId())).withSelfRel(),
						linkTo(methodOn(ClubController.class).all()).withRel("clubs")))
				.collect(Collectors.toList());

		return CollectionModel.of(clubs, linkTo(methodOn(ClubController.class).all()).withSelfRel());
	}

	@GetMapping("/suggest/{dist}")
	String suggest(@PathVariable String dist) {
		int remainingDist = Integer.parseInt(dist);
		List<Club> clubs = repository.findAll();
		String suggestedClub = null;
		for (Club c : clubs) {
			if(Integer.parseInt(c.getDist()) <= remainingDist){
				suggestedClub = "Use a " + c.getName() + " since you are " + dist + " yds away";
				break;
			}
		}
	return suggestedClub;
	}




	@PostMapping("/clubs")
	Club newclub(@RequestBody Club newClub) {
		return repository.save(newClub);
	}


	@GetMapping("/clubs/{id}")
	EntityModel<Club> one(@PathVariable Long id) {

		Club club = repository.findById(id) //
				.orElseThrow(() -> new ClubNotFoundException(id));

		return EntityModel.of(club, //
				linkTo(methodOn(ClubController.class).one(id)).withSelfRel(),
				linkTo(methodOn(ClubController.class).all()).withRel("clubs"));
	}


	@PutMapping("/clubs/{id}")
	Club replaceclub(@RequestBody Club newClub, @PathVariable Long id) {

		return repository.findById(id) //
				.map(club -> {
					club.setName(newClub.getName());
					club.setDist(newClub.getDist());
					return repository.save(club);
				}) //
				.orElseGet(() -> {
					newClub.setId(id);
					return repository.save(newClub);
				});
	}

	@DeleteMapping("/clubs/{id}")
	void deleteclub(@PathVariable Long id) {
		repository.deleteById(id);
	}
}