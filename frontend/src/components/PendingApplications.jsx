import React, { useEffect, useState } from 'react'
import { BACKEND_BASE_URL } from './functions'
import PendingApplicationsCard from './PendingApplicationsCard'
import PendingApplicationDetailCard from './PendingApplicationDetailCard'
import PendingApplicationDetailDocumentCard from './PendingApplicationDetailDocumentCard'

const PendingApplications = () => {
  const [reRenderer, setReRenderer] = useState(true)
  const [dataArray, setDataArray] = useState(null)
  useEffect(() => {
    fetch(BACKEND_BASE_URL + "/fetchPendingApplications",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      }).then(res => res.json()).then(data => { setDataArray(data) })
  }, [reRenderer])
  setTimeout(() => {
    setReRenderer(prev => !prev)
  }, 1000);
  return (
    dataArray != null ?
      <main className='p-2'>
        <h1 className='text-3xl font-bold text-center mt-5 mb-10'>PENDING APPLICATIONS</h1>
        {
          dataArray.map((elem, index) => {
            return <PendingApplicationsCard key={index} data={elem} />
          })
        }
        <PendingApplicationDetailCard />
        <PendingApplicationDetailDocumentCard />
      </main>
      :
      <></>
  )
}

export default PendingApplications