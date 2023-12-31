import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../Utility/LocalStorage';
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        } else if (filter === 'onside') {
            const onsideJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsideJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        console.log(storedJobIds);
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
            <h2>I am applied the job : {appliedJobs.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onside')}><a>Onside</a></li>
                </ul>
            </details>
            <ul>
                {/* {
                    appliedJobs.map(job => <li key={job.id}>
                        <p>{job.job_title} {job.company_name} {job.remote_or_onsite}</p>
                    </li>)
                } */}

                {
                    displayJobs.map(job => <li key={job.id}>
                        <p>{job.job_title} {job.company_name} {job.remote_or_onsite}</p>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;