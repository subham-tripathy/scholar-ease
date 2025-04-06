import React from 'react'
import { openPendingApplicationCard } from './functions'

const PendingApplicationsCard = ({ data }) => {
    return (
        <div className='relative bg-blue-700 text-white py-3 px-5 flex gap-25 rounded items-center text-center my-5 '>
            <img src="/images/scholarships/img3.avif" className='relative w-[10%] rounded border border-white' />
            <h1><b>STUDENT ID:</b><br />{data.student_id}</h1>
            <h1><b>STUDENT NAME:</b><br />{data.full_name}</h1>
            <h1><b>SCHOLARSHIP ID:</b><br />{data.scholarship_id}</h1>
            <button onClick={()=>{openPendingApplicationCard(data)}} className='cursor-pointer bg-slate-500 py-1 px-3 rounded border border-white'>View Details</button>
            <div className='absolute right-10 flex gap-5'>
                <button className='cursor-pointer px-3 py-1 rounded bg-green-500'>Approve</button>
                <button className='cursor-pointer px-3 py-1 rounded bg-red-500'>Reject</button>
            </div>
        </div>
    )
}

export default PendingApplicationsCard