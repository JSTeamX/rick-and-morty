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


export const EPISODE_GET_DETAIL = gql`
  query EPISODE_GET_DETAIL($episodeid: ID!){
    episode(id: $episodeid) {
      name
      episode
      air_date
      characters {
        id,
        name,
        image
      }
    }
  }
`;

export const CHARACTERS_GET_DETAIL = gql`
  query CHARACTERS_GET_DETAIL($characterid: ID!){
    character(id: $characterid) {
      name
      episode {
        id
        name
      }
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      status
      image
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
