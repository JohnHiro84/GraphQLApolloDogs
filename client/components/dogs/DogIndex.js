import gql from 'graphql-tag';
import React from "react";
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";

const FETCH_DOGS = gql`
  query FetchDogs {
    dogs {
      _id
      name
    }
  }
`;


const DogIndex = () => {
  return (
    <Query query={FETCH_DOGS}>

      {({ loading, error, data }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>{error}</h1>;
        return (
          <div>
            <h1>DogIndex</h1>

            <ul>
            {console.log(data)}
            {data.dogs.map(dog => {
              return (
                <li key={dog._id}>
                  <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
                </li>
              );
            })}

            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default DogIndex;
