import React from 'react'

const PendingApplicationDetailDocumentCard = () => {
    return (
        <div
            id='PendingApplicationDetailDocumentCard'
            className='bg-gray-500 p-5 h-[80%] w-[80%] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-10 flex items-center justify-center scale-0'
        >
            <button
                onClick={(e) => {
                    const a = document.createElement('a');
                    a.href = e.target.parentElement.querySelector("img").src;
                    a.download = 'image.jpg';
                    a.click();
                }}
                className="text-xl absolute cursor-pointer bg-blue-700 px-2 py-1 rounded-lg bottom-5 left-2 border border-white text-white"
            >
                Download
            </button>
            <button
                onClick={(e) => {
                    e.target.parentElement.classList.remove('scale-100')
                    e.target.parentElement.classList.add('scale-0')
                }}
                className="text-xl absolute cursor-pointer bg-[#dc3545] px-2 py-1 rounded-lg bottom-5 right-5 border border-white text-white"
            >
                Close
            </button>
            <img className='relative h-[100%]' />
        </div>
    )
}

export default PendingApplicationDetailDocumentCard