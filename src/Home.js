import React from 'react';
// react-owl-carousel2
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function Home() {
    const options = {
        items: 2,
        margin:20,
        nav: true,
        loop: false,
        rewind: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
    };


    const events = {
        onDragged: function (event) {
            console.log('onDragged');
        },
        onChanged: function (event) {
            console.log('onChanged');
         }
    };


    return (
        <div>
            <h2 className="mt-2 mb-4">Home page</h2>
             
            <h4 className="mb-2">Owl Carousel</h4>
            <OwlCarousel className="slider-items owl-carousel owl-theme" options={options} events={events}>
            <div class="item">
                    <img alt="img1" className="w-100" src="./img/courses-v1-img1.jpg"/></div>
                <div class="item">
                    <img alt="img1" className="w-100" src="./img/courses-v1-img2.jpg"/></div>
                <div class="item">
                    <img alt="img1" className="w-100" src="./img/courses-v1-img3.jpg"/></div>
                <div class="item">
                    <img alt="img1" className="w-100" src="./img/courses-v1-img4.jpg"/></div>
                <div class="item">
                    <img alt="img1" className="w-100" src="./img/courses-v1-img2.jpg"/></div>
            </OwlCarousel>
        </div>
    )
}
 