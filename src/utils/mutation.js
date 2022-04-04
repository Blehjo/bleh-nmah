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
  mutation addThread($text:String,$user:ID, $match:ID){
    addThread(text:$text,  user:$user, match:$match){
      _id
      text
      user{
        _id
      }
      match{
        _id
      }
    }
  }
`;

export const UPDATE_LIBRARY = gql`
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

export const REMOVE_LIBRARY = gql`
  mutation removeThread($threadId: ID!) {
    removeThread(threadId: $threadId) {
          _id
          text
          date
    }
  }
`;

export const ADD_PAINTING = gql`
  mutation addMessage($text:String, $date:DATE, $thread:ID, $user:ID){
    addMessage(text:$text, date:$date, thread:$thread, user:$user){
      _id
      text
      date
      thread{
        _id
      }
      user{
        _id
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
