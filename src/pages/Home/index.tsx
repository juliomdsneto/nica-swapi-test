import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../../components/CharacterCard';
import { InputSearch } from '../../components/InputSearch';
import { api } from '../../services/api';
import { Character } from '../../types/Character.type';
import { CompleteDataTypes } from '../../types/CompleteData.types';
import { getUrlId } from '../../utils/getUrlId';
import { Container } from './styles';

export default function Home() {
  const [data, setData] = useState<CompleteDataTypes>();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);



  const getData = useCallback(async () => {
    try {
      const response = await api.get(`people/?page=${page}`);

      const returnedData = await response.data;

      setData(returnedData);
      setCharacters(returnedData.results);
    } catch {
    }
  }, [page]);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await api.get(`people/?search=${inputSearch}`);

      const returnedData = await response.data;

      setData(returnedData);
      setCharacters(returnedData.results);
    } catch {
    }
  }, [inputSearch]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(event.target.value);
  }

  const debouncedOnChange = debounce(handleInputChange, 500);

  useEffect(() => {

    getData();
  }, [getData]);

  useEffect(() => {

    getFilteredData();
  }, [getFilteredData]);

  return (
    <Container>
      <div className="title">
        <h1>
          SWAPI Search
        </h1>
      </div>

      <div className="header">
        <InputSearch
          type="text"
          placeholder="Search for someone or something"
          onChange={(event) => debouncedOnChange(event)}
        />
      </div>

      <div className="cards">
        {characters.map((character) => (
          <Card
            name={character.name}
            key={character.name}
            id={getUrlId(character.url)}
            type="characters"
          />
        ))}
      </div>
    </Container>
  );
}
