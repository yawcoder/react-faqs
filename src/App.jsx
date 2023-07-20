import { useState, useEffect } from 'react';
import data from './questions';
import Singlequestion from './Question';
import {BsInfoCircle} from 'react-icons/bs';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col h-screen pt-20 items-center md:pt-32">
      <h2 className="text-2xl md:text-3xl text-blue-900 md:mb-14"><BsInfoCircle className="inline-block mx-2 mb-2"/><span className="font-pacifico">Frequently Asked Questions</span></h2>
      <article className="flex flex-col md:flex-row transparent w-[95%] rounded-2xl md:w-5/6 lg:w-4/6">
        <section className=" mt-7 md:w-[40%] flex justify-center items-center md:flex-col h-16 md:h-56 bg-blue-200 rounded-2xl">
          {data.map((faq,index) => {
            const {id,title,icon} = faq
            return <button key={id} onClick={() => {
              setValue(index);
            }} className={`${index === value && "bg-white shadow-xl duration-300"} duration-300 capitalize text-2xl text-blue-900 font-bold w-1/2 h-2/3 pt-2 rounded-md md:text-sm mx-10 md:ml-5 md:my-2 md:w-4/5 md:text-left md:px-3 md:py-2`}>
              <span className="inline-block">{icon}</span>
              <span className="ml-2 hidden md:inline">{title}</span>
            </button>
          })}
        </section>
        <section class="mx-7 md:w-[60%]">
          {data[value].questions.map((item) => {
            const {id,question,answer} = item;
            return  <Singlequestion key={id} faq={question} answer={answer}/>
          })}
        </section>
      </article>
    </div>
  )
}

export default App
