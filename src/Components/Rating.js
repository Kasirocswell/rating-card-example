import React from 'react'


const Rating = ({ clickOne, clickTwo, clickThree, clickFour, clickFive, clickSubmit }) => {


   

  return (
    <div className='flex w-screen h-screen'>
        <div id='rating' className='flex flex-col w-[327px] h-[360px] bg-[#262E38] my-auto mx-auto rounded-2xl'>
            <div className='w-[40px] h-[40px] bg-[#262E38] rounded-full relative ml-[24px] mt-[24px]'>
                <svg className='absolute ml-[11.5px] mt-[11px]' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </div>
            <h2 className='font-head text-[24px] font-bold ml-[24px] mt-[16px] text-white cursor-default'>How did we do?</h2>
            <h2 className='ml-[24px] mr-[24px] mt-[10px] text-[14px] font-head text-[#969FAD] cursor-default'>Please let us know how we did with your support request.  All feedback is appreciated to help us improve our offering!</h2>
            <div className='flex flex-row w-[281px] h-[42px] ml-[24px] mt-[24px]'>
                <div tabIndex='0' onClick={clickOne} className='w-[42px] h-[42px] bg-[#262E38] rounded-full relative mr-[18px] text-[#7C8798] hover:bg-[#FC7614] hover:text-white focus:bg-[#7C8798] focus:text-white'>
                    <h2 className='font-head font-bold text-[14px] text-numbers absolute ml-[17.12px] mt-[11.29px] cursor-default'>1</h2>
                </div>
                <div tabIndex='0' onClick={clickTwo} className='w-[42px] h-[42px] bg-[#262E38] rounded-full relative mr-[18px] text-[#7C8798] hover:bg-[#FC7614] hover:text-white focus:bg-[#7C8798] focus:text-white'>
                    <h2 className='font-head font-bold text-[14px] text-numbers absolute ml-[17.12px] mt-[11.29px] cursor-default'>2</h2>
                </div>
                <div tabIndex='0' onClick={clickThree} className='w-[42px] h-[42px] bg-[#262E38] rounded-full relative mr-[18px] text-[#7C8798] hover:bg-[#FC7614] hover:text-white focus:bg-[#7C8798] focus:text-white'>
                    <h2 className='font-head font-bold text-[14px] text-numbers absolute ml-[17.12px] mt-[11.29px] cursor-default'>3</h2>
                </div>
                <div tabIndex='0' onClick={clickFour} className='w-[42px] h-[42px] bg-[#262E38] rounded-full relative mr-[18px] text-[#7C8798] hover:bg-[#FC7614] hover:text-white focus:bg-[#7C8798] focus:text-white'>
                    <h2 className='font-head font-bold text-[14px] text-numbers absolute ml-[17.12px] mt-[11.29px] cursor-default'>4</h2>
                </div>
                <div tabIndex='0' onClick={clickFive} className='w-[42px] h-[42px] bg-[#262E38] rounded-full relative text-[#7C8798] hover:bg-[#FC7614] hover:text-white focus:bg-[#7C8798] focus:text-white'>
                    <h2 className='font-head font-bold text-[14px] text-numbers absolute ml-[17.12px] mt-[11.29px] cursor-default'>5</h2>
                </div>
            </div>
            <button onClick={clickSubmit} className='w-[279px] h-[42px] bg-[#FC7614] mx-auto rounded-3xl mt-[24px] text-bold text-white font-head tracking-widest hover:bg-white hover:text-[#FC7614]'>SUBMIT</button>
        </div>
    </div>
  )
}

export default Rating

