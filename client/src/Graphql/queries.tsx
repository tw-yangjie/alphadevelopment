import gql from 'graphql-tag';

export const PRODUCTS = gql`
  query PRODUCTS ($featured: Boolean, $exclude: [String]){
    products (featured: $featured, exclude: $exclude) {
      _id,
      title,
      link,
      category,
      excerpt,
      techs,
      featured,
      details,
      pid
    }
  }
`;

export const SUBSCRIBE = gql`
  mutation subscribe ($email: String!) {
    subscribe (email: $email) {
      error,
      message,
    }
  }
`;