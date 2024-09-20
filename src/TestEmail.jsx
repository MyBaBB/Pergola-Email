// eslint-disable-next-line no-unused-vars
import React from "react";
import Copyright from "./Copyright";
 
 
const EmailTemplate = () => (
  <div >
  <div>
    <div>
 
        <title>Tom Pergola</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');
        `}</style>
          </div>
          <div>
        <div>
          
          <div>
            <div
          className="relative flex right-0 top-0 p-10 rounded-2xl"
          style={{
            background: "radial-gradient(circle,  #272225 , #95838b )",
          }}
            > 
{/* Lighter Variations
#7c6c74 (25% lighter)
#95838b (50% lighter)
#aea1a3 (75% lighter)
Darker Variations
#4f454a (25% darker)
#3b3437 (50% darker)
#272225 (75% darker) */}

            <div className="  relative flex pb-4  flex-col rounded-xl max-w-[620px] m-auto ">
         
             <span className="text-center   text-lime-500 font-LibreBaskerville-Bold">Example Email Made for Tom</span>
             <span className="text-center   text-lime-500 font-LibreBaskerville-Bold">Test it Out</span>
            
            <div
              className="relative flex m-auto  max-w-[600px] flex-col rounded-xl py-4 text-blue-950"
              style={{
            border: "2px solid #e6b764",
            outline: "2px solid black",
            fontFamily: "georgia, serif",
            background: "#63565c",
              }}
            >






              <img src="https://fastweb.mybabb.com/TomPergola/TomandTrump500xx405.jpg
              " alt="Tom and Trump" className="relative flex m-auto pr-4" />
               
                <div className="text-center text-[12px]">

                
                  {/* Tom Pergola Fine Art Button */}
         <a
                href="https://tom-pergola-fine-art.mybabb.com"
              
                
               
               
             
                >
         <div className="topSectionDvi relative m-auto -mt-0 sm:-mt-10 md:-mt-20 mr-14 flex w-fit items-center justify-center rounded-2xl p-2"
                style={{
                background: "linear-gradient(to bottom, #cb993d, #886541)",
                decoration: "none",
                }}>
           <div className="relative m-auto  flex w-fit " >
              <div className="tomsWorld relative flex">
                   <span className=" clip text-white text-sm sm:text-2xl decoration-none hover:underline hover:text-yellow-500" >
                   Enter Tom&apos;s World
                   </span>
                  
              </div>
               
           </div>
           
         </div>
         
      <p  className="text-center text-sm sm:text-2xl  text-white mt-10 p-4">
          <span className="block mt-[-.68rem] text-lime-400 text-sm sm:text-xl
          ">A Professional Gateway to Wordpress</span> 
          Welcome to the vibrant world of Tom Pergola!
          As a renowned artist, I create dynamic and captivating &apos;Assemblage Plastique&apos; sculptures that immortalize the everyday icons of our culture.
      </p>  
         </a>
              
                </div>
              </div>


            
            </div>
            < Copyright />
          </div>
          
         
        </div>
      </div>
    </div>
  </div>







  </div>
);
export default EmailTemplate;
