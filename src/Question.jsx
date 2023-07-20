import { useState } from "react";
import { FaAngleDown } from 'react-icons/fa'

const Question = ({ faq, answer }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
      <article className="border-b-[1px] border-solid border-blue-300 pb-3">
        <header onClick={() => setShowInfo(!showInfo)} className="mt-5 flex justify-between font-semibold cursor-pointer duration-500">
          <h4 className="inline">{faq}</h4>
          <button className={`${showInfo ? "rotate-180 duration-300" : "rotate-0 duration-300"}`}>
            <FaAngleDown/>
          </button>
        </header>
        {showInfo && <p className="ml-7 mt-3 w-4/5 opacity-80">{answer}</p>}
      </article>
    );
  };

export default Question