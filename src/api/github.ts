
// import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';

export async function getPinnedRepositories(){
    // const httpLink = createHttpLink({
    //     uri: 'https://api.github.com/graphql',
    //   });
      
      // const authLink = setContext((_, { headers }) => {
      //   return {
      //     headers: {
      //       ...headers,
      //       authorization: `Bearer ${process.env.REACT_APP_GIT_TOKEN}`,
      //     }
      //   }
      // });
      
      // const client = new ApolloClient({
      //   link: authLink.concat(httpLink),
      //   cache: new InMemoryCache()
      // });

      // const { data } = await client.query({
      //   query: gql`
      //     {
      //       user(login: "${process.env.REACT_APP_GIT_USER}") {
      //         pinnedItems(first: 6) {
      //           totalCount
      //           edges {
      //             node {
      //               ... on Repository {
      //                 name
      //                 id
      //                 url
      //                 description
      //                 stargazers {
      //                   totalCount
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `
      // });
      
      // const { user } = data;
      // const pinnedItems = user.pinnedItems.edges.map(edge => edge.node);
      const pinnedItems = [
        {
          __typename: 'Repository',
          name: 'Algoritmo-Planificacion-FIFO',
          id: 'MDEwOlJlcG9zaXRvcnkyNjEwNTQwMjA=',      
          url: 'https://github.com/chjuca/Algoritmo-Planificacion-FIFO',      
          description:       
            'Repositorio Destinado a la Elaboracion del proyecto de Sistemas Operativos IB',      
          stargazers: { __typename: 'StargazerConnection', totalCount: 2 }      
        },      
        {      
          __typename: 'Repository',      
          name: 'Algoritmo-Reemplazo-Paginas',      
          id: 'MDEwOlJlcG9zaXRvcnkyNzU4NjU5MjQ=',      
          url: 'https://github.com/chjuca/Algoritmo-Reemplazo-Paginas',      
          description:       
            'Repositorio Destinado a la Elaboracion del proyecto de Sistemas Operativos BIM II',      
          stargazers: { __typename: 'StargazerConnection', totalCount: 2 }      
        },      
        {      
          __typename: 'Repository',      
          name: 'HackerRank',      
          id: 'MDEwOlJlcG9zaXRvcnkyOTIxMjU5ODI=',      
          url: 'https://github.com/chjuca/HackerRank',      
          description: "Repository created to practice and try the difficult the HackerRank exercises",      
          stargazers: { __typename: 'StargazerConnection', totalCount: 0 }      
        },      
        {
          __typename: 'Repository',      
          name: 'HackerRank-Javascript-Test',      
          id: 'MDEwOlJlcG9zaXRvcnkyOTI2NzA3Nzc=',      
          url: 'https://github.com/chjuca/HackerRank-Javascript-Test',      
          description: "Repository created as guide for the developers have problems with the challenges of HackerRank Test JAVASCRIPT(BASIC)",      
          stargazers: { __typename: 'StargazerConnection', totalCount: 0 }      
        },      
        {      
          __typename: 'Repository',      
          name: 'SGA',      
          id: 'MDEwOlJlcG9zaXRvcnkyMjQyOTQ0MDA=',      
          url: 'https://github.com/chjuca/SGA',      
          description: "Repositorio para versionar el Sistema de Gestion Academica del LIID ",      
          stargazers: { __typename: 'StargazerConnection', totalCount: 1 }      
        },      
        {      
          __typename: 'Repository',      
          name: 'portfolio',      
          id: 'R_kgDOJJr56Q',      
          url: 'https://github.com/chjuca/portfolio',      
          description: "Repositorio del portfolio en React.js",      
          stargazers: { __typename: 'StargazerConnection', totalCount: 0 }
        }
      ]
      return pinnedItems
}