// eslint-disable-next-line no-unused-vars
import React from 'react'

const Copyright = () => {
  return (
    <div>
         <a href="https://mybabb.com">
          <div className="copyright absolute bottom-4 right-5 text-[.5rem] text-slate-400 border-2 px-2 
                           border-solid border-slate-900 rounded-xl bg-blue-950 ">
            <span className="block text-center">Template by </span>
            <span>
              &lt;&lt;&lt;&copy;<span className='text-orange-400 
              font-bold font-LibreBaskerville-Bold'>
                 &nbsp;<em>Brett</em> &nbsp;
            </span>
                 <em>9-2024</em>&gt;&gt;&gt;
            </span>
          </div>
          </a> 


          <style >{`
            .copyright {
              animation: pulse 2s ease-in-out infinite;
            }
            @keyframes pulse {
              0% {
                border-color: #1a202c;
              }
              50% {
                border-color: #4a5568;
              }
              100% {
                border-color: #1a202c;
              }
            }
          `}</style>






    </div>
  )
}

export default Copyright
