export interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
  characters: Array<Character>;
}

export interface CharacterOrigin {
  name: string;
}

export interface CharacterLocation {
  name: string;
}
export interface Character {
  readonly id: string;
  name: string;
  episode: Array<Episode>;
  species: string;
  gender: string
  origin: CharacterOrigin;
  location: CharacterLocation;
  status: string;
  image: string;
}
