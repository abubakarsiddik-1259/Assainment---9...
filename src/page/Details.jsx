


import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {

      const { skillId } = useParams();

  const data = useLoaderData();
  console.log(skillId, data);
    return (
        <div>
            <h1>Details</h1>
        </div>
    );
};

export default Details;