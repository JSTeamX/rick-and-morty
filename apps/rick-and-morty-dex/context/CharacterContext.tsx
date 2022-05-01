import React, { createContext } from 'react';
import { Character } from '../interfaces';

const CharacterContext = createContext(null);

function CharacterProvider({ children }){
  const [ searchValue, setSearchValue ] = React.useState<string>('');
  const [ characters, setCharacters ] = React.useState<Character[]>([]);

  let searchedCharacters = [];
  if(!searchValue.length){
    searchedCharacters = characters;
  } else {
    searchedCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <CharacterContext.Provider
      value={{
        searchValue,
        setSearchValue,
        characters,
        setCharacters,
        searchedCharacters
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export { CharacterContext, CharacterProvider };
