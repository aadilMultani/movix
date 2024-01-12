import React, { useState } from 'react'
import ContentWrapper from '../../../component/contentwrapper/ContentWrapper';
import SwitchTabs from '../../../component/switchTabs/SwitchTabs';
import Carousel from '../../../component/caruosel/Carousel';

import useFetch from '../../../hooks/useFetch';

function Popular() {
    const [endPoint, setEndpoint] = useState('movie');
    const { data, loading } = useFetch(`/${endPoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>What's Popular</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Popular;