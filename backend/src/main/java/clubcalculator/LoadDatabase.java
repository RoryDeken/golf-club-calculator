package clubcalculator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	@Bean
	CommandLineRunner initDatabase(ClubRepository repository) {

		return args -> {
			log.info("Preloading " + repository.save(new Club("Driver", "250")));
			log.info("Preloading " + repository.save(new Club("3 Wood", "225")));
			log.info("Preloading " + repository.save(new Club("4 Iron", "200")));
			log.info("Preloading " + repository.save(new Club("5 Iron", "185")));
			log.info("Preloading " + repository.save(new Club("6 Iron", "170")));
			log.info("Preloading " + repository.save(new Club("7 Iron", "155")));
			log.info("Preloading " + repository.save(new Club("8 Iron", "140")));
			log.info("Preloading " + repository.save(new Club("9 Iron", "125")));
			log.info("Preloading " + repository.save(new Club("Pitching Wedge", "100")));
			log.info("Preloading " + repository.save(new Club("Gap Wedge", "75")));
			log.info("Preloading " + repository.save(new Club("Sand Wedge", "50")));
			log.info("Preloading " + repository.save(new Club("Lob Wedge", "20")));
			log.info("Preloading " + repository.save(new Club("Putter", "1")));
};}
}
