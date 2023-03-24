
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export async function getPinnedRepositories(){
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      
      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.GIT_TOKEN}`,
          }
        }
      });
      
      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });

      const { data } = await client.query({
        query: gql`
          {
            user(login: "${process.env.GIT_USER}") {
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      id
                      url
                      description
                      stargazers {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        `
      });
      
      const { user } = data;
      const pinnedItems = user.pinnedItems.edges.map(edge => edge.node);

      return pinnedItems
}