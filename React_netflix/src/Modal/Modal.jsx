import React from 'react'
import YouTube from 'react-youtube'
function ModalDiv({id,about}) {
    const opts = {
        height: '405',
        width: '800',
        playerVars: {
          autoplay: 1,
        },
    };
  return (
    <>
    <div className=' w-[800px] h-[620px]'>
        <div className="video  h-[400px] w-full mt-0">
            <YouTube videoId={id} opts={opts}  />;
        </div>
        <div className=' text-white w-[800px] h-[220px] p-6'>
            <div className='flex'>
            <h1 className='text-3xl font-bold'>{about?(about.title).toUpperCase():''}</h1> <h1 className='text-3xl font-bold fixed right-[50px]'>{about?(about.vote_average):''}⭐</h1> 
            </div>
            <p className='mt-4 text-sm'>{about?(about.overview):''}</p>
        </div>
    </div>
    </>
    
  )
}

export default ModalDiv