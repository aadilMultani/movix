import React, { useState } from 'react';
import Carousel from '../../../component/caruosel/Carousel';
import ContentWrapper from '../../../component/contentwrapper/ContentWrapper';
import SwitchTabs from '../../../component/switchTabs/SwitchTabs';

import useFetch from '../../../hooks/useFetch';
function TopRated() {

    const [endPoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endPoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Top Rated</span>

                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
        </div>
    )
}

export default TopRated;