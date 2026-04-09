import React from 'react';
import heroImg from "../../../assets/hero_img.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 w-11/12 mx-auto mt-12 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between py-20">
                <img
                    src={heroImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-6xl font-bold mb-12">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;