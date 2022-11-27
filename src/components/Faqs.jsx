import { useState } from "react";

const Faqs = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;

  return (
    <div className="bg-secondary mx-8 mt-8 border h-screen">
      <div className="shadow rounded border border-gray-100 border-t-0 m-8 bg-white">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">
            What makes Sell Your PC more trustworthy than other platforms?
          </div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 fous:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={ansClass}>
          Unlike other classified platforms, where sellers are responsible for
          dealing with thieves and fraudsters, we provide a fast, safe and
          secure platform for you to sell your item/s. With Sell Your PC, you
          don’t have to worry about being scammed, dealing with fake payment
          notifications or being bombarded with SMSes asking: “Is it still
          available.” No one wants to deal with time wasters, or the “schlep” of
          having to sift through potential buyers who might be interested but
          never arrive to collect. At Sell Your PC, we truly embody our slogan -
          “Fast. Safe. Secure.” Our job is to provide a trustworthy and
          effective platform for you to sell your goods without putting
          yourself, or your family in any potential danger by meeting some
          random person at a petrol station. We are fully transparent about who
          we are, and we are dedicated to fulfilling our mission: making the
          selling and buying of second-hand goods quick and easy, and most
          importantly, safe.
        </div>
      </div>
    </div>
  );
  // return (
  //  <div className="container mx-auto px-4 border border-gray-600 shadow">
  //   hello world
  //  </div>
  // );
};

export default Faqs;
