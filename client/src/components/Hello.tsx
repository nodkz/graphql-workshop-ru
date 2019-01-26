import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { HelloQuery, HelloQueryVariables } from './__generated__/HelloQuery';

class TypedQuery extends Query<HelloQuery, HelloQueryVariables> {}

class Hello extends Component {
  public render() {
    return (
      <div>
        <h1>Hello</h1>
        <TypedQuery
          query={gql`
            query HelloQuery($name: String!) {
              hi(name: $name)
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
          `}
          variables={{
            name: 'nodkz',
          }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return `Loading`;
            }
            if (error) {
              return `Error!: ${error}`;
            }

            return <div>{JSON.stringify(data)}</div>;
          }}
        </TypedQuery>
      </div>
    );
  }
}

export default Hello;
