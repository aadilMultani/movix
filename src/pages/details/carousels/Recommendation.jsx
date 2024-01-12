import React from 'react';

import Carousel from '../../../component/caruosel/Carousel';
import useFetch from '../../../hooks/useFetch';

function Recommendation({ mediaType, id }) {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title='Recommendations'
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;