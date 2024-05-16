import React from 'react'
import { tw } from 'twind';
import "./forums.css"

import { Image1, Image2, Image3 } from '../media';



const Forums = () => {
  return (
    <div className={tw `p-3 d-flex flex-col justify-center items-center `} id='body'>


    <div className={tw`p-10 w-[1200px] mx-auto min-h-[100vh] border-2  `}>
      <div className={tw`grid md:grid-cols-2 gap-8 items-start  `}>
        <div className={tw`space-y-4 bg-blue-50 border-2 p-2 rounded-lg`}>
          <div className={tw`space-y-2  d-flex flex-col justify-items-center items-center`}>
            <h1 className={tw`text-4xl font-bold no-underline`}>Forum</h1>
            <p className={tw`text-gray-500 dark:text-gray-400`}>
              Discuss gaming topics, strategies, tips, and troubleshooting in
              dedicated forums.
            </p>
          </div>  
          <div className={tw`space-y-4 `}>
            <div className={tw`flex items-center space-x-4 `}>
              <div className={tw`flex flex-col text-center`}>
                <span className={tw`text-2xl font-semibold`}>23</span>
                <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                  Forum Categories
                </span>
              </div>
              <div className={tw`flex flex-col text-center`}>
                <span className={tw`text-2xl font-semibold`}>45</span>
                <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                  Active Threads
                </span>
              </div>
              <div className={tw`flex flex-col text-center`}>
                <span className={tw`text-2xl font-semibold`}>98</span>
                <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                  Multimedia Posts
                </span>
              </div>
            </div>
            <div className={tw`space-y-4 `}>
              <div
                className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`}
                data-v0-t="card"
              >
                <div className={tw`p-4 space-y-4  `}>
                  <div className={tw`flex items-center space-x-4`}>
                    <img
                      src={Image1}
                      width="40"
                      height="40"
                      alt="Avatar"
                      className={tw`rounded-full`}
                      style={{ aspectRatio: '40/40', objectFit: 'cover' }}
                    />
                    <div className={tw`space-y-1`}>
                      <h3 className={tw`text-lg font-bold`}>Game Genre Discussion</h3>
                      <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                        Join the discussion and share your thoughts!
                      </p>
                    </div>
                  </div>
    
                  <div className={tw`border-t border-gray-200 dark:border-gray-800`}></div>
                  <div className={tw`grid grid-cols-2 gap-4`}>
                    <div className={tw`space-y-2`}>
                      <h4 className={tw`text-base font-semibold`}>Participants</h4>
                      <ul className={tw`grid grid-cols-2 gap-2 text-sm`}>
                        <li>Player1</li>
                        <li>Player2</li>
                        <li>Player3</li>
                        <li>Player4</li>
                      </ul>
                    </div>
                    <div className={tw`space-y-2`}>
                      <h4 className={tw`text-base font-semibold`}>Likes</h4>
                      <ul className={tw`text-sm`}>
                        <li>Player1 liked this post</li>
                        <li>Player2 liked this post</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>     
    </div>
    </div>
    </div>
    <div className={tw`my-[-40px]`} >
      <img src={Image2} alt="" />
    </div>
    </div>
    
    </div>


    <div className={tw`p-10 w-[1200px]  min-h-[100vh]  border-2 mt-5 `}>
                <div className={tw`grid md:grid-cols-2 gap-8 items-start `}>
                  <div className={tw`space-y-4`}>
                    <div
                      className={tw`rounded-lg border bg-card text-card-foreground shadow-sm `}
                      data-v0-t="card"
                    >
                      <div className={tw`p-4 space-y-4 bg-blue-50`}>
                        <div className={tw`flex items-center space-x-4  `}>
                          <img
                            src={Image2}
                            width="40"
                            height="40"
                            alt="Avatar"
                            className={tw`rounded-full`}
                            style={{ aspectRatio: '40/40', objectFit: 'cover' }}
                          />
                          <div className={tw`space-y-1`}>
                            <h3 className={tw`text-lg font-bold`}>
                              Specific Game Title Chat
                            </h3>
                            <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                              Dive deep into discussions about your favorite game!
                            </p>
                          </div>
                        </div>
                        <div className={tw`border-t border-1 border-black dark:border-gray-800`}></div>
                        <div className={tw`grid grid-cols-2 gap-4`}>
                          <div className={tw`space-y-2`}>
                            <h4 className={tw`text-base font-semibold`}>Replies</h4>
                            <ul className={tw`grid grid-cols-2 gap-2 text-sm`}>
                              <li>PlayerX replied to this thread</li>
                              <li>PlayerY replied to this thread</li>
                            </ul>
                          </div>
                          <div className={tw`space-y-2`}>
                            <h4 className={tw`text-base font-semibold`}>Multimedia Content</h4>
                            <ul className={tw`text-sm`}>
                              <li>PlayerX posted a video</li>
                              <li>PlayerY posted an image</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={tw`space-y-4 `}>
                    <div
                      className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`}
                      data-v0-t="card"
                    >
                      <div className={tw`p-4 space-y-4 bg-blue-100 border-2`}>
                        <div className={tw`space-y-2`}>
                          <div className={tw`flex items-center space-x-2`}>
                            <h1 className={tw`text-2xl font-bold no-underline`}>Game Strategy Tips</h1>
                            <div
                              className={tw`text-sm font-medium bg-red-500 text-black  hover:text-white  rounded-md px-2 py-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}
                            >
                              10 New threads
                            </div>
                          </div>
                          <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                            Share and learn new gaming strategies with the community!
                          </p>
                        </div>
                        <div className={tw`grid grid-cols-3 gap-4`}>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerA</div>
                            <div>Sharing a new tip!</div>
                          </div>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerB</div>
                            <div>Looking for advice</div>
                          </div>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerC</div>
                            <div>Discussing game strategies</div>
                          </div>
                        </div>
                      </div>

                      <div className={tw`flex items-center p-6`}>
                        <div className={tw`flex gap-4`}>
                          <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-black rounded-md px-3 py-2`}>
                            Join Discussion
                          </button>
                          <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-black rounded-md px-3 py-2`}>
                            Create Thread
                          </button>
                        </div>
                      </div>
        </div>
      </div>
    </div>




    <div className={tw`flex flex-col gap-4 mt-5 text-white`}>
                        <div className={tw`grid grid-cols-3 gap-4`}>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerD</div>
                            <div>Joining the discussion!</div>
                          </div>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerE</div>
                            <div>Excited to share tips!</div>
                          </div>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerF</div>
                            <div>Looking for troubleshooting help</div>
                          </div>
                        </div>
                        <div className={tw`grid grid-cols-3 gap-4`}>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerG</div>
                            <div>Ready to discuss strategies!</div>
                          </div>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerH</div>
                            <div>Joining the troubleshooting zone</div>
                          </div>
                          <div className={tw`flex flex-col gap-1`}>
                            <div className={tw`text-sm font-semibold`}>PlayerI</div>
                            <div>Sharing multimedia content</div>
                          </div>
                        </div>
                        <form className={tw`flex items-center space-x-4`}>
                          <textarea
                            className={tw`flex rounded-md border border-input text-black px-3 py-2 text-sm max-h-[100px] w-full min-h-[40px] sm:min-h-[60px] outline-none`}
                            placeholder="Share your thoughts..."
                          ></textarea>
                          <button
                            className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-white rounded-md px-4 py-2`}
                            type="submit"
                          >
                            Post
                          </button>
                        </form>
                      </div>
    </div>


    






    <div className={tw`rounded-lg border bg-card text-card-foreground shadow-sm bg-blue-100 w-[1200px] m-5`}
      data-v0-t="card">
                        <div className={tw`p-4 space-y-4`}>
                          <div className={tw`space-y-2`}>
                            <div className={tw`flex items-center space-x-2`}>
                              <h1 className={tw`text-2xl font-bold no-underline`}>Troubleshooting Zone</h1>
                              <div
                                className={tw`text-sm font-medium  text-black  hover:text-white rounded-md px-2 py-1 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}
                              >
                                5 new posts
                              </div>
                            </div>
                            <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
                              Get help with game issues and share solutions!
                            </p>
                          </div>
                          <div className={tw`grid grid-cols-3 gap-4`}>
                            <div className={tw`flex flex-col gap-1`}>
                              <div className={tw`text-sm font-semibold`}>PlayerX</div>
                              <div>Looking for assistance</div>
                            </div>
                            <div className={tw`flex flex-col gap-1`}>
                              <div className={tw`text-sm font-semibold`}>PlayerY</div>
                              <div>Providing troubleshooting tips</div>
                            </div>
                            <div className={tw`flex flex-col gap-1`}>
                              <div className={tw`text-sm font-semibold`}>PlayerZ</div>
                              <div>Sharing game bug fixes</div>
                            </div>
                          </div>
                        </div>
                        <div className={tw`flex items-center p-6`}>
                          <div className={tw`flex gap-4`}>
                            <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-white rounded-md px-3 py-2`}>
                              Get Help
                            </button>
                            <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-white rounded-md px-3 py-2`}>
                              Share Solution
                            </button>
                          </div>
                        </div>
                      </div>


    </div> 
  )
};
export default Forums 



// import React from 'react';
// import { tw } from 'twind';
// import "./forums.css";
// import { Image1, Image2, Image3 } from '../media';

// const Forums = () => {
//   return (
//     <div className={tw `p-3 d-flex flex-col justify-center items-center `} id='body'>
//       <div className={tw`p-10 max-w-[1200px] mx-auto min-h-[100vh] border-2  `}>
//         <div className={tw`grid md:grid-cols-2 gap-8 items-start  `}>
//           <div className={tw`space-y-4 bg-blue-50 border-2 p-2 rounded-lg`}>
//             <div className={tw`space-y-2  d-flex flex-col justify-items-center items-center`}>
//               <h1 className={tw`text-4xl font-bold no-underline`}>Forum</h1>
//               <p className={tw`text-gray-500 dark:text-gray-400`}>
//                 Discuss gaming topics, strategies, tips, and troubleshooting in
//                 dedicated forums.
//               </p>
//             </div>  
//             <div className={tw`space-y-4 `}>
//               <div className={tw`flex items-center space-x-4 `}>
//                 <div className={tw`flex flex-col text-center`}>
//                   <span className={tw`text-2xl font-semibold`}>23</span>
//                   <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
//                     Forum Categories
//                   </span>
//                 </div>
//                 <div className={tw`flex flex-col text-center`}>
//                   <span className={tw`text-2xl font-semibold`}>45</span>
//                   <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
//                     Active Threads
//                   </span>
//                 </div>
//                 <div className={tw`flex flex-col text-center`}>
//                   <span className={tw`text-2xl font-semibold`}>98</span>
//                   <span className={tw`text-sm text-gray-500 dark:text-gray-400`}>
//                     Multimedia Posts
//                   </span>
//                 </div>
//               </div>
//               <div className={tw`space-y-4 `}>
//                 <div
//                   className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`}
//                   data-v0-t="card"
//                 >
//                   <div className={tw`p-4 space-y-4  `}>
//                     <div className={tw`flex items-center space-x-4`}>
//                       <img
//                         src={Image1}
//                         width="40"
//                         height="40"
//                         alt="Avatar"
//                         className={tw`rounded-full`}
//                         style={{ aspectRatio: '40/40', objectFit: 'cover' }}
//                       />
//                       <div className={tw`space-y-1`}>
//                         <h3 className={tw`text-lg font-bold`}>Game Genre Discussion</h3>
//                         <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
//                           Join the discussion and share your thoughts!
//                         </p>
//                       </div>
//                     </div>

//                     <div className={tw`border-t border-gray-200 dark:border-gray-800`}></div>
//                     <div className={tw`grid grid-cols-2 gap-4`}>
//                       <div className={tw`space-y-2`}>
//                         <h4 className={tw`text-base font-semibold`}>Participants</h4>
//                         <ul className={tw`grid grid-cols-2 gap-2 text-sm`}>
//                           <li>Player1</li>
//                           <li>Player2</li>
//                           <li>Player3</li>
//                           <li>Player4</li>
//                         </ul>
//                       </div>
//                       <div className={tw`space-y-2`}>
//                         <h4 className={tw`text-base font-semibold`}>Likes</h4>
//                         <ul className={tw`text-sm`}>
//                           <li>Player1 liked this post</li>
//                           <li>Player2 liked this post</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>     
//               </div>
//             </div>
//           </div>
//           <div className={tw`my-[-40px]`} >
//       <img src={Image2} alt="" />
//    </div>
//     </div>
    
//    </div>


//   <div className={tw`p-10 w-[1200px]  min-h-[100vh]  border-2 mt-5 `}> 
//                   <div className={tw`grid md:grid-cols-2 gap-8 items-start `}>
//               <div className={tw`space-y-4`}>                
//                   <div className={tw`rounded-lg border bg-card text-card-foreground shadow-sm `}
//                     data-v0-t="card" >
//                     <div className={tw`p-4 space-y-4 bg-blue-50`}>
//                          <div className={tw`flex items-center space-x-4  `}>                         
//                            <img
//                             src={Image2}
//                             width="40"
//                             height="40"
//                             alt="Avatar"
//                             className={tw`rounded-full`}
//                             style={{ aspectRatio: '40/40', objectFit: 'cover' }}
//                           />
//                           <div className={tw`space-y-1`}>
//                             <h3 className={tw`text-lg font-bold`}>
//                               Specific Game Title Chat
//                             </h3>
//                             <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
//                               Dive deep into discussions about your favorite game!
//                             </p>
//                           </div>
//                         </div>
//                         <div className={tw`border-t border-1 border-black dark:border-gray-800`}></div>
//                         <div className={tw`grid grid-cols-2 gap-4`}>
//                           <div className={tw`space-y-2`}>
//                             <h4 className={tw`text-base font-semibold`}>Replies</h4>
//                             <ul className={tw`grid grid-cols-2 gap-2 text-sm`}>
//                               <li>PlayerX replied to this thread</li>
//                               <li>PlayerY replied to this thread</li>
//                             </ul>
//                           </div>
//                           <div className={tw`space-y-2`}>
//                             <h4 className={tw`text-base font-semibold`}>Multimedia Content</h4>
//                             <ul className={tw`text-sm`}>
//                               <li>PlayerX posted a video</li>
//                               <li>PlayerY posted an image</li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className={tw`space-y-4 `}>
//                     <div
//                       className={tw`rounded-lg border bg-card text-card-foreground shadow-sm`}
//                       data-v0-t="card"
//                     >
//                       <div className={tw`p-4 space-y-4 bg-blue-100 border-2`}>
//                         <div className={tw`space-y-2`}>
//                           <div className={tw`flex items-center space-x-2`}>
//                             <h1 className={tw`text-2xl font-bold no-underline`}>Game Strategy Tips</h1>
//                             <div
//                               className={tw`text-sm font-medium bg-red-500 text-black  hover:text-white  rounded-md px-2 py-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}
//                             >
//                               10 New threads
//                             </div>
//                           </div>
//                           <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
//                             Share and learn new gaming strategies with the community!
//                           </p>
//                         </div>
//                         <div className={tw`grid grid-cols-3 gap-4`}>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerA</div>
//                             <div>Sharing a new tip!</div>
//                           </div>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerB</div>
//                             <div>Looking for advice</div>
//                           </div>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerC</div>
//                             <div>Discussing game strategies</div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className={tw`flex items-center p-6`}>
//                         <div className={tw`flex gap-4`}>
//                           <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-black rounded-md px-3 py-2`}>
//                             Join Discussion
//                           </button>
//                           <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-black rounded-md px-3 py-2`}>
//                             Create Thread
//                           </button>
//                         </div>
//                       </div>
//         </div>
//       </div>
//     </div>




//     <div className={tw`flex flex-col gap-4 mt-5 text-white`}>
//                         <div className={tw`grid grid-cols-3 gap-4`}>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerD</div>
//                             <div>Joining the discussion!</div>
//                           </div>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerE</div>
//                             <div>Excited to share tips!</div>
//                           </div>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerF</div>
//                             <div>Looking for troubleshooting help</div>
//                           </div>
//                         </div>
//                         <div className={tw`grid grid-cols-3 gap-4`}>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerG</div>
//                             <div>Ready to discuss strategies!</div>
//                           </div>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerH</div>
//                             <div>Joining the troubleshooting zone</div>
//                           </div>
//                           <div className={tw`flex flex-col gap-1`}>
//                             <div className={tw`text-sm font-semibold`}>PlayerI</div>
//                             <div>Sharing multimedia content</div>
//                           </div>
//                         </div>
//                         <form className={tw`flex items-center space-x-4`}>
//                           <textarea
//                             className={tw`flex rounded-md border border-input text-black px-3 py-2 text-sm max-h-[100px] w-full min-h-[40px] sm:min-h-[60px] outline-none`}
//                             placeholder="Share your thoughts..."
//                           ></textarea>
//                           <button
//                             className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-white rounded-md px-4 py-2`}
//                             type="submit"
//                           >
//                             Post
//                           </button>
//                         </form>
//                       </div>
//     </div>


    






//     <div className={tw`rounded-lg border bg-card text-card-foreground shadow-sm bg-blue-100 w-[1200px] m-5`}
//       data-v0-t="card">
//                         <div className={tw`p-4 space-y-4`}>
//                           <div className={tw`space-y-2`}>
//                             <div className={tw`flex items-center space-x-2`}>
//                               <h1 className={tw`text-2xl font-bold no-underline`}>Troubleshooting Zone</h1>
//                               <div
//                                 className={tw`text-sm font-medium  text-black  hover:text-white rounded-md px-2 py-1 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}
//                               >
//                                 5 new posts
//                               </div>
//                             </div>
//                             <p className={tw`text-sm text-gray-500 dark:text-gray-400`}>
//                               Get help with game issues and share solutions!
//                             </p>
//                           </div>
//                           <div className={tw`grid grid-cols-3 gap-4`}>
//                             <div className={tw`flex flex-col gap-1`}>
//                               <div className={tw`text-sm font-semibold`}>PlayerX</div>
//                               <div>Looking for assistance</div>
//                             </div>
//                             <div className={tw`flex flex-col gap-1`}>
//                               <div className={tw`text-sm font-semibold`}>PlayerY</div>
//                               <div>Providing troubleshooting tips</div>
//                             </div>
//                             <div className={tw`flex flex-col gap-1`}>
//                               <div className={tw`text-sm font-semibold`}>PlayerZ</div>
//                               <div>Sharing game bug fixes</div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className={tw`flex items-center p-6`}>
//                           <div className={tw`flex gap-4`}>
//                             <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-white rounded-md px-3 py-2`}>
//                               Get Help
//                             </button>
//                             <button className={tw`text-sm font-medium bg-blue-500 text-white hover:bg-slate-700 hover:text-white rounded-md px-3 py-2`}>
//                               Share Solution
//                             </button>
//                           </div>
//                         </div>
//                       </div>


//     </div> 
//   )
// };
// export default Forums 

