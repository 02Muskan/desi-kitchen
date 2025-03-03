import React from 'react';
import Image from 'next/image';
import Login from './login';

const mainlogin = () => {
    return (
        <div className="flex flex-col md:flex-row bg-[#FFF8E6] ">

            <div className="hidden md:flex w-1/2 justify-center items-center p-4">
                <Image
                    src="/images/Purple_Flat_Illustrative_Food_Place_and_Restaurant_Logo-removebg-preview.png"
                    alt="food"
                    width={400}
                    height={400}
                    className="object-cover rounded-full max-w-full"
                />
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <Login />
            </div>
        </div>
    );
};

export default mainlogin;
