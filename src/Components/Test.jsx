import React, { useState } from 'react'

const subjects = [
    {
        id: 1,
        name: 'اللغة العربية'
    },
    {
        id: 2,
        name: 'اللغة الانجليزية'
    },
    {
        id: 3,
        name: 'اللغة العربية'
    },
]

const Test = () => {
    const [title, setTitle] = useState("أختر المادة")
    const [isAccordionOpen, setIsAccordionOpen] = useState(false); // Accordion state

  const handleSubjectClick = (subject) => {
    setTitle(subject.name);
    setIsAccordionOpen(false); // Close the accordion
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen); // Toggle accordion state
  };

    return (
        <div className='lg:w-[1209px] lg:h-[140vh] rounded-[10px] flex flex-col gap-[24px] bg-[#F8F8F8] items-center '>
            <div className='lg:w-[96.7%] lg:mt-[24px] flex flex-col gap-[16px]'>
                <h2 className='lg:w-[195px] lg:h-[32px] font-Almarai text-[24px] leading-[32px] mx-auto text-[#000000] '>
                    إختر خطتك المناسبة
                </h2>
                <div id="accordion-collapse" data-accordion="collapse" className='flex flex-col lg:gap-[18px]'>
      <h2 id="accordion-collapse-heading-1">
        <button 
          type="button" 
          dir='rtl' 
          className="flex items-center justify-between w-full h-[77px] p-5 font-medium rtl:text-center text-[#403685] border border-[#9D9D9D] rounded-[8px] focus:border-[#403685] hover:bg-sky-200 gap-3" 
          data-accordion-target="#accordion-collapse-body-1" 
          aria-expanded={isAccordionOpen} 
          aria-controls="accordion-collapse-body-1"
          onClick={toggleAccordion}
        >
          <span className='lg:w-[97%] h-[30px]'> {title} </span>
          <svg 
            data-accordion-icon 
            className={`w-3 h-3 shrink-0 transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div 
        id="accordion-collapse-body-1" 
        className={`w-full border-[0.25px] rounded-t-[8px] ${isAccordionOpen ? 'block' : 'hidden'} cursor-pointer`} 
        aria-labelledby="accordion-collapse-heading-1"
      >
        {subjects.map(subject => (
          <div 
            key={subject.id} 
            className={`lg:h-[52px] border-[0.25px] border-[#403685] bg-[#FFFFFF] ${subject.id === 3 ? "border-[0.25px]" : "border-b-0"} `}
            onClick={() => handleSubjectClick(subject)}
          >
            <p className='h-[30px] w-full font-Almarai font-normal text-[16px] leading-[30px] text-[#403685] text-center mt-[11px]'>
              {subject.name}
            </p>
          </div>
        ))}
      </div>
    </div>
            </div>
        </div>
    )
}

export default Test