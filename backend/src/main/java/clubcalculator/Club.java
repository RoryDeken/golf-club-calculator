package clubcalculator;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class Club {

	private @Id @GeneratedValue Long id;
	private String name;
	private String dist;

	Club() {}

	Club(String name, String dist) {

		this.name = name;
		this.dist = dist;
	}

	public Long getId() {
		return this.id;
	}

	public String getName() {
		return this.name;
	}

	public String getDist() {
		return this.dist;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDist(String dist) {
		this.dist = dist;
	}

	@Override
	public boolean equals(Object o) {

		if (this == o)
			return true;
		if (!(o instanceof Club))
			return false;
		Club club = (Club) o;
		return Objects.equals(this.id, club.id) && Objects.equals(this.name, club.name)
				&& Objects.equals(this.dist, club.dist);
	}

	@Override
	public int hashCode() {
		return Objects.hash(this.id, this.name, this.dist);
	}

	@Override
	public String toString() {
		return "Club{" + "id=" + this.id + ", name='" + this.name + '\'' + ", dist='" + this.dist + '\'' + '}';
	}
}
