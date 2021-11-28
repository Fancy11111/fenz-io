import gql from "graphql-tag";

import { BlogPostCollectionResponse, MetaDataQuery } from "./contentful";

export type PostPreview = {
  name: string,
  headerImage?: {
    url: string,
    width: number,
    height: number,
    fileName: string,
    description: string
  },
  title: string,
  introText?: string
}

export type PostPreviewResponse = BlogPostCollectionResponse<PostPreview>;

export const GET_POST_PREVIEWS = gql`
query Blogs($limit: Int!, $skip: Int!) {
  blogPostCollection(limit: $limit, skip: $skip) {
    items {
      name, 
      headerImage {
        url,
        width, 
        height,
        fileName,
        description
      }, 
      ${MetaDataQuery}
      title, 
      introText,
    }
  }
}
`

type PostNames = {
  name: string
}

export type PostNameResponse = BlogPostCollectionResponse<PostNames>

export const GET_POST_NAMES = gql`
  query PostNames {
    blogPostCollection {
      items {
        name
      }
    }
  }
`

export type Post = {
  name: string,
  headerImage?: {
    url: string,
    width: number,
    height: number,
    fileName: string,
    description: string
  },
  title: string,
  introText?: string
}

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
        },
        ${MetaDataQuery}
      }
    }
  }
`

export const AMOUNT_OF_POSTS = gql`
  query Blogs {
    blogPostCollection {total}
  }
`