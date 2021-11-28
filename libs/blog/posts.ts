import gql from "graphql-tag";

export const GET_POST_PREVIEWS = gql`
query Blogs {
  blogPostCollection(limit: 3) {
    items {
      name, 
      headerImage {
        url,
        width, 
        height,
        fileName
      }, 
      title, 
      introText
    }
  }
}
`

export const GET_POST_NAMES = gql`
  query PostNames {
    blogPostCollection {
      items {
        name
      }
    }
  }
`

export const GET_POST = gql`
    query Post($search: String!){
    blogPostCollection(where: {
        name: $search
    }) {
      items {
        name, 
        headerImage {
          url,
          width, 
          height
        }, 
        title, 
        introText,
        paragraph {
          json
        }
      }
    }
  }
`