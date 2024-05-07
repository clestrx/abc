import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { getSliderAction } from '../store/category/asyncActions';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000 
};

function ContentSlider() {
    const dispatch = useDispatch();
    const [slides, setSlides] = useState(null);

    const sliderData = useSelector((state) => state?.category?.getSlider);

    useEffect(() => {
        dispatch(getSliderAction());
    }, []);

    useEffect(() => {
        if (sliderData?.loading === false) {
            if (sliderData?.data?.status) {
                setSlides(sliderData?.data?.data);
                sliderData.data = null;
            }
        }
    }, [sliderData]);

    return (
        <Slider {...settings} className='slider_class'>
            {slides && slides.map((item) => {
                return (
                    <div>
                        <div className='bg_img flex justify-center items-center'>
                            <div className='bg-white p-[40px] w-[80%]'>
                                {/* {item?.title &&
                                    <div className='text-center text-[30px] font-[400]'>{item?.title}</div>
                                } */}
                                <div className='text-center text-[18px] font-[400]'>{item?.description}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default ContentSlider