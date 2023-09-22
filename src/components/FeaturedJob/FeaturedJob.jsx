import React from 'react';
import { AiFillEuroCircle, AiTwotoneEnvironment } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-gray-100 shadow-xl">
            <figure className='pt-6'><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 py-2 border mr-2 rounded border-[#9873FF] text-[#7E90FE] font-extrabold'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 border  rounded border-[#9873FF] text-[#7E90FE] font-extrabold'>{job_type}</button>
                </div>
                <div className='flex'>
                    <div className='flex items-center mr-6'>
                        <AiTwotoneEnvironment className='mr-2 w-6 h-6'></AiTwotoneEnvironment>
                        <h2 className='text-[#757575] text-lg font-semibold'>{location}</h2>
                    </div>
                    <div className='flex items-center'>
                        <AiFillEuroCircle className='mr-2 w-6 h-6'></AiFillEuroCircle>
                        <h2 className='text-[#757575] text-lg font-semibold'>{salary}</h2>
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;