import { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from '@apollo/client';
import { CHARACTERS_GET_DETAIL, CHARACTERS_LIST, CHARACTERS_SEARCH_BY_NAME, EPISODE_GET_DETAIL } from './graphql/character-queries';

export const DataQuery = {

  async getCharacters<U>(client: ApolloClient<NormalizedCacheObject>)
    : Promise<ApolloQueryResult<U>> {
    return client.query({
      query: CHARACTERS_LIST,
    });
  },

  async searchCharacterByName<U>(name: string, client: ApolloClient<NormalizedCacheObject>)
    : Promise<ApolloQueryResult<U>> {
    return client.query({
      query: CHARACTERS_SEARCH_BY_NAME,
      variables: {
        name
      },
    });
  },

  async getCharacter<U>(id: string, client: ApolloClient<NormalizedCacheObject>)
    : Promise<ApolloQueryResult<U>> {
    return client.query({
      query: CHARACTERS_GET_DETAIL,
      variables: {
        characterid: id
      },
    });
  },

  async getEpisodeDetail<U>(id: string, client: ApolloClient<NormalizedCacheObject>)
    : Promise<ApolloQueryResult<U>> {
    return client.query({
      query: EPISODE_GET_DETAIL,
      variables: {
        episodeid: id
      },
    });
  }

}
