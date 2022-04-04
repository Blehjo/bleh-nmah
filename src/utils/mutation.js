import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($userId: ID!) {
  updateUser(userId:$userId) {
    user{
      _id
      email
      password
      likes
      cart
    }
  }
}
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
        user{
          _id
          email
          password
          likes
          cart
        }
    }
  }
`;

export const ADD_LIBRARY = gql`
  mutation addLibrary($libraryName: String, $description:String){
    addLibrary(libraryName: $libraryName,  description: $description){
      _id
      libraryName
      description
    }
  }
`;

export const UPDATE_LIBRARY = gql`
    mutation updateLibrary($libraryId: ID!) {
        updateLibrary(libraryId: $libraryId) {
            library{
            _id
            libraryName
            description
            }
        }
    }
`;

export const REMOVE_LIBRARY = gql`
  mutation removeLibrary($libraryId: ID!) {
    removeLibrary(libraryId: $libraryId) {
          _id
          libraryName
          description
    }
  }
`;

export const ADD_PAINTING = gql`
  mutation addPainting($title: String, $year:DATE, $medium: String, $description: String, $photo: String, $library:ID){
    addPainting(title: $title, year: $year, medium: $medium, description: $description, photo: $photo, library: $library){
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

export const UPDATE_PAINTING = gql`
    mutation updatePainting($paintingId: ID!) {
        updatePainting(paintingId: $paintingId) {
            painting{
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
    }
`;

export const REMOVE_PAINTING = gql`
  mutation removePainting($painringId: ID!) {
      removePainting(paintingId: $paintingId) {
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
