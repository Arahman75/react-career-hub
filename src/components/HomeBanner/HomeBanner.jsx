import React from 'react';
import banner from '../../assets/images/user.png'

const HomeBanner = () => {
    return (
        <div className='text-center grid grid-cols-1 md:grid-cols-2 mb-24 mt-10 gap-8'>

            <div className='md:w-[570px] flex items-center justify-center'>

                <div>
                    <h2 className='text-7xl text-[#1A1919] font-extrabold '>One Step <br /> Closer To Your  <br /> <span className='text-[#7E90FE]'>Dream
                        Job</span></h2>
                    <p className='my-4'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <div className="flex justify-start">
                        <a className="btn text-xl font-extrabold text-[#FFF] bg-[#9873FF]">Star Applying</a>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <img src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default HomeBanner;