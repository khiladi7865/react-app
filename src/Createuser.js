import React, { useState } from 'react';

// Swiper
import Swiper from 'react-id-swiper';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';


export default function Createuser() {
    const [name, nameUpdate] = useState("");
    const [age, ageUpdate] = useState("");
    const [address, addressUpdate] = useState("");

    function SubmitFun(params) {
        let datafrm = { name, age, address }
        console.warn('Form data : ', datafrm);
    }

    const paramsSlide = {
        modules: [Pagination, Navigation, EffectFade, Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        effect: 'fade',
        rebuildOnUpdate: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    }

    return (
        <div>
            <h2>Create User : Forms</h2>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => nameUpdate(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Age" value={age} onChange={(e) => ageUpdate(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => addressUpdate(e.target.value)} />
            </div>
            <button className="btn btn-primary" type="button" onClick={SubmitFun}>Create User</button>


            <h4 className="mt-4 mb-2">Swiper slider</h4>
            <div className="position-relative">
                <Swiper {...paramsSlide}>
                    <div><img alt="img1" className="w-100" src="./img/swip-fade-1.jpg" /></div>
                    <div><img alt="img1" className="w-100" src="./img/swip-fade-2.jpg" /></div>
                    <div><img alt="img1" className="w-100" src="./img/swip-fade-3.jpg" /></div>
                </Swiper>
            </div>
        </div>
    )
}

// Result - Form data :  {name: 'bvbv', age: '44', address: '555'}
