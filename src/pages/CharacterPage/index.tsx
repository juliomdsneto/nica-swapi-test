import { useCallback, useEffect, useState } from 'react';
import { FaCarAlt, FaSpaceShuttle } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';
import { api } from '../../services/api';
import { Character } from '../../types/Character.type';
import { getUrlId } from '../../utils/getUrlId';
import { CharacterContainer, Container } from './styles';

export default function CharacterPage() {
  const [data, setData] = useState<Character>();
  const {
    films,
    homeWorld,
    starships,
    vehicles,
  } = useCharacter(data);
  const { id } = useParams();

  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(`/people/${id}`);
      setData(response.data);
    } catch {
    }
  }, [id]);

  useEffect(() => {
    getCharacterData();
  }, [getCharacterData]);

  return (
    <Container>

      <CharacterContainer>
        <div className="character-data">
          <div className="character-data-details">
            <h1>{data?.name}</h1>
            <p>
              home world:
              {' '}
              <span>{homeWorld.name}</span>
            </p>

            <p>
              birth year:
              {' '}
              <span>{data?.birth_year}</span>
            </p>

            <p>
              gender:
              {' '}
              <span>{data?.gender}</span>
            </p>

            <p>
              heigth:
              {' '}
              <span>
                {data?.height}
                {' '}
                cm
              </span>
            </p>

            <p>
              weigth:
              {' '}
              <span>
                {data?.mass}
                {' '}
                kg
              </span>
            </p>

            <p>
              skin color:
              {' '}
              <span>{data?.skin_color}</span>
            </p>

            <p>
              eyes color:
              {' '}
              <span>{data?.eye_color}</span>
            </p>

            <p>
              hair color:
              {' '}
              <span>{data?.hair_color}</span>
            </p>
          </div>

          <div className="character-data-others">
            <>
              <div className="character-data-others-data">
                <h2>spaceships</h2>

                {starships.length > 0 ? (
                  <ul>
                    {starships.map((starship) => (
                      <li key={starship.name}>
                        <Link to={`/starships/${getUrlId(starship.url)}`}>
                          <FaSpaceShuttle />
                          {starship.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>none</span>
                )}
              </div>

              <div className="character-data-others-data">
                <h2>vehicles</h2>
                {vehicles.length > 0 ? (
                  <ul>
                    {vehicles.map((vehicle) => (
                      <li key={vehicle.name}>
                        <Link to={`/vehicles/${getUrlId(vehicle.url)}`}>
                          <FaCarAlt />
                          {vehicle.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>none</span>
                )}
              </div>

              <div className="character-data-others-data">
                <h2>movies</h2>
                <ul>
                  {films.map((film) => (
                    <li key={film.title}>
                      <Link to={`/films/${getUrlId(film.url)}`}>
                        <MdMovie />
                        {film.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>

          </div>
        </div>

        <div className="character-image">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={`Imagem de ${data?.name}`}
          />
        </div>
      </CharacterContainer>
    </Container>
  );
}
