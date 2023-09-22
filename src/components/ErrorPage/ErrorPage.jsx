import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            <div className='w-[400px] text-center'>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <Link to="/"><button className="btn btn-warning">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;