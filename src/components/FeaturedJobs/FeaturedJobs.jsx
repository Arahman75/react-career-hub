import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <div className='text-center'>
                <h2 className='text-5xl text-[#1A1919] font-bold'>Featured Jobs {jobs.length}</h2>
                <p className='text-[#757575] my-5 text-lg font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>

                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All</button>

            </div>
        </div>
    );
};

export default FeaturedJobs;