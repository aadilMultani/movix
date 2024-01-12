import React from 'react';
import { useSelector } from 'react-redux';
import Img from '../../../component/LazyLoadingImage/img';
import './style.scss';

import ContentWrapper from '../../../component/contentwrapper/ContentWrapper';
import avatar from "../../../assets/avatar.png";

function Cast({ data, loading }) {

    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className='castSection'>
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className='listItems'>
                        {data?.map((item) => {
                            let imgURL = item.profile_path
                                ? url.profile + item.profile_path
                                : avatar;
                            return (
                                <div key={item.id} className='listItem'>
                                    <div className='profileImg'>
                                        <Img src={imgURL} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    )
}

export default Cast;