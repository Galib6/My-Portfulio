import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Project = ({ item }) => {
  const [data, setData] = useState()
  useEffect(() => {
    fetch("siteDetails.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const { setSiteDetails, siteDetails } = useContext(AuthContext)

  const handleClick = (id) => {
    const specificData = data.filter(function (data) {
      return data.id === id;
    })
    setSiteDetails(specificData)
  }

  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 overflow-y-auto h-60 w-68'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p>
      <Link to={`/${item.id}`}><button onClick={() => handleClick(item.id)} className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-md
             transition-all rounded-lg mt-4'>View Details</button></Link>
    </div >
  );
};

export default Project;
