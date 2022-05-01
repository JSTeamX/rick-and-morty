import { gql } from "@apollo/client";

export const CHARACTERS_LIST = gql`
  query {
    characters(page: 1) {
      results {
        id,
        name,
        image,
        status,
      }
    }
  }
`;


export const CHARACTERS_SEARCH_BY_NAME = gql`
  query CHARACTERS_SEARCH_BY_NAME($name: String!){
    characters(page: 1, filter: { name: $name }) {
      results {
        id,
        name,
        image,
        status,
      }
    }
  }
`;
