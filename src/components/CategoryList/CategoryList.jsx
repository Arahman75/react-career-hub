import React, { useEffect, useState } from 'react';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='text-center'>
            <h2 className='text-5xl text-[#1A1919] font-bold'>Job Category List</h2>
            <p className='text-[#757575] my-5 text-lg font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default CategoryList;