import React from 'react';

import Resource from './Resource';

const ShowCat = () => {

    const webURL = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC';

    const render = ( data ) => {
        
        if ( data.loading === true ) return null;
        console.log('Got the data' + data);
    }

    return (
        <div>
            <h1>in Show Cat</h1>

            <Resource path={ webURL } render={ render }/>
        </div>
    )
}

export default ShowCat;