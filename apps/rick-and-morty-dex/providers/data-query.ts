import { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from '@apollo/client';
import { CHARACTERS_LIST } from './graphql/character-queries';

export const DataQuery = {

  async getCharacters<U>(client: ApolloClient<NormalizedCacheObject>)
    : Promise<ApolloQueryResult<U>> {
    return client.query({
      query: CHARACTERS_LIST,
    });
  }

}
