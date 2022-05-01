import { gql } from "@apollo/client";

export const CHARACTERS_LIST = gql`
  query {
    characters(page: 2) {
      results {
        name,
        image,
        status,
      }
    }
  }
`;
