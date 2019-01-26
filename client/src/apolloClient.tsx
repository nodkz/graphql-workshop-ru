import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
  credentials: 'same-origin',
  headers: {},
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ` + `${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({ cache, link });

const query = gql`
  query {
    employees(limit: 10000) {
      _id
      lastName
      firstName
      reportsTo {
        firstName
        lastName
      }
    }
  }
`;
console.log(query);
client.query({ query }).then(res => console.log(`Result:`, res));

export default client;
