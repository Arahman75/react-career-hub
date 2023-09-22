import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/LocalStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idint = parseInt(id)
    const job = jobs.find(job => job.id === idint);
    // console.log(job);
    const handleApplyJobs = () => {
        saveJobApplication(idint);
        toast('You have applied successfully')
    }

    return (
        <div>
            <h2>Job details:{id} </h2>

            <div className='grid gap-5 md:grid-cols-4'>
                <div className='border col-span-3'>
                    <p>{job.job_description}</p>
                </div>
                <div className='border '>
                    <p>{job.job_description}</p>
                    <button onClick={handleApplyJobs} className="btn my-4 btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;