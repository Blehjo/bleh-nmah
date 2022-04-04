import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            email
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser ($userId: ID!) {
        user(userId: $userId) {
            _id
            email
        }
    }
`;

export const QUERY_LIBRARIES = gql`
    query allLibrariess {
        libraries {
            _id
            libraryName
            description
            painting {
                _id
                title
                year
                medium
                description
                photo
            }    
        }
    }
`;

export const QUERY_SINGLE_LIBRARY = gql`
    query singleLibray($libraryId: ID!) {
        library(libraryId: $libraryId) {
            _id
            libraryName
            description
            painting {
                _id
                title
                year
                medium
                description
                photo
            }
        }
    }
`;

export const QUERY_LIKED_LIBRARIES = gql`
    query likedLibraries($user:ID!){
        library(user: $userId){
            _id
            libraryName
            description
            painting {
                _id
                title
                year
                medium
                description
                photo
            }
        }
    }
`;

export const QUERY_PAINTINGS = gql`
    query allPaintings {
        painting {
            _id
            title
            year
            medium
            description
            photo
            library {
                libraryName
                description
            }
        }
    }
`;

export const QUERY_SINGLE_PAINTING = gql`
    query singlePainting($paintingId: ID!) {
        singlePainting(paintingId: $paintingId) {
            _id
            title
            year
            medium
            description
            photo
            library {
                _id
                libraryName
                description
            }
        }
    }
`;

export const QUERY_PAINTINGS_LIBRARY = gql`
    query paintingsLibrary($libraryId: ID!) {
        paintingsLibrary(libraryId: $libraryId) {
            _id
            title
            year
            medium
            description
            photo
            library {
                _id
                libraryName
                description
            }
        }
    }
`;

export const QUERY_LIKED_PAINTINGS = gql`
    query likedPaintings($userId:ID!){
        likedPaintings(userId: $userId){
            _id
            title
            year
            medium
            description
            photo
            library {
                _id
                libraryName
                description
            }
        }
    }
`;

export const QUERY_CART = gql`
    query cart($userId: ID!) {
        cart(userId: $userId) {
            _id
            title
            year
            medium
            description
            photo
            library {
                _id
                libraryName
                description
            }
        }
    }
`;