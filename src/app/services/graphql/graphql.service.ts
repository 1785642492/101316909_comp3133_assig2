import { Injectable } from '@angular/core';
import { Apollo, gql, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

const uri = 'http://localhost:1337/graphql'; 
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    ssrMode: true, 
  };
}

export const graphqlProvider = [
  {
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink],
  },
];

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getAllEmployees() {
    return this.apollo.watchQuery({
      query: gql`
        query GetAllEmployees {
          employees {
            id
            name
            // other fields
          }
        }
      `,
    }).valueChanges;
  }

  getEmployeeById(id: string) {
    return this.apollo.watchQuery({
      query: gql`
        query GetEmployeeById($id: ID!) {
          employee(id: $id) {
            id
            name
            // other fields
          }
        }
      `,
      variables: {
        id: id,
      },
    }).valueChanges;
  }

  
}
