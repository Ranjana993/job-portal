import React from 'react'

const Jobs = ({res}) => {
  return (
    <>
    <div>
      <h3 className='text-lg font-bold mb-2'>{res.length} JObs</h3>
    </div>
      <section className=''>{res} </section>
    </>
  )
}

export default Jobs