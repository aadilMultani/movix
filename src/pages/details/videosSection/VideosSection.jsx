import React from 'react';
import './style.scss';

import ContentWrapper from '../../../component/contentwrapper/ContentWrapper';

function VideosSection({ data, loading }) {
    console.log("data", data);
    return (
        <div className='videosSection'>
            <ContentWrapper>
                <div className="sectionHeading">Official Video</div>
            </ContentWrapper>
        </div>
    )
}

export default VideosSection;   