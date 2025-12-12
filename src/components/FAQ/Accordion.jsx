import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ faq, toggled, onShow, index }) => {
  return (
    <div className="relative">
      {/* Header */}
      <dt className="flex flex-col items-start rounded-t-lg">
        <div
          id={faq.title}
          onClick={onShow}
          className="absolute z-10 top-0 left-0 w-full h-32 cursor-pointer"
        ></div>
        {/* Header Main Text + Number */}
        <div className="w-full h-full flex items-center justify-between bg-madison-950 py-6 px-8">
          <span className="title !mb-0 !text-madison-500 !text-4xl w-6 lg:w-24">
            {index + 1}
             {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="SVGb6KAzcRO"><g fill="none"><path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 23c-4.04-7.043 3.624-11.136 8-12c14.541-12.844 26.485-.287 28 8c1.514 8.287 1.158 14.893 2 18c-6.463-8.7-10.877-7.158-12-5c-2.02 4.144-5.314 4.252-7 3c-4.04-3.314-10.476 3.202-13 7c4.847-8.7 5.505-14.273 5-16c-2.02-8.286-8.307-5.416-11-3"/><circle cx="23" cy="16" r="2" fill="#000"/></g></mask></defs><path fill="#c70009" d="M0 0h48v48H0z" mask="url(#SVGb6KAzcRO)"/></svg> */}
          </span>
          <p className="title !text-2xl lg:text-xl !text-muted-50 font-semibold !mb-0 w-full !text-center lg:!text-left">
            {faq.title}
          </p>
          {toggled ? (
            <FaMinus className="mr-3 pointer-events-none text-muted-50" />
          ) : (
            <FaPlus className="mr-3 pointer-events-none text-madison-500" />
          )}
        </div>
      </dt>

      {/* Header's Content -> Smooth animated */}
      <dd
        className={`transition-all duration-700 ease-in-out overflow-hidden border-x-2 border-b-2 ${
          toggled
            ? "max-h-[1000px] opacity-100 border-madison-950"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-9 pt-0 pb-9 text-black font-medium w-full">
          {faq.content && (
            <p
              className="sans mt-8 text-black text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.content }}
            ></p>
          )}
          {faq.paragraph1 && (
            <p
              className="mt-4 text-lg text-justify text-black"
              dangerouslySetInnerHTML={{ __html: faq.paragraph1 }}
            ></p>
          )}
          {faq.paragraph2 && (
            <p
              className="mt-4 text-lg text-justify text-black"
              dangerouslySetInnerHTML={{ __html: faq.paragraph2 }}
            ></p>
          )}
          {faq.paragraph3 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph3 }}
            ></p>
          )}
          {faq.oList && (
            <ol className="mt-3 list-decimal">
              {faq.oList.map((item, index) => (
                <li key={index} className="ml-3 text-justify">
                  {item}
                </li>
              ))}
            </ol>
          )}
          {faq.paragraph4 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph4 }}
            ></p>
          )}
          {faq.list && (
            <ul className="mt-3 list-disc">
              {faq.list.map((item, index) => (
                <li key={index} className="ml-3 text-justify">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {faq.paragraph5 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph5 }}
            ></p>
          )}
          {faq.list2 && (
            <ul className="mt-3 list-disc">
              {faq.list2.map((item2, index) => (
                <li key={index} className="ml-3 text-justify">
                  {item2}
                </li>
              ))}
            </ul>
          )}
          {faq.note && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.note }}
            ></p>
          )}
        </div>
      </dd>
    </div>
  );
};

export default Accordion;
