/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div>
      {/* Faq question cover */}

      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-5xl">
          <div className="space-y-4">
            <Item
              className="text-sm"
              title="FOOD or POLICY (Missed/Late Orders, Credits, and Changes/Cancellations)"
            >
              Email sarahb@libertylaunchacademy.org or call 509-505-7607 and they’ll get back to you right away.
            </Item>
            <Item title="TECHNICAL SUPPORT">
              Need help navigating the site? Email: support@boonli.com
            </Item>
            <Item title="PAYMENT INFORMATION">
              The program accepts payment by Debit Card, Credit Card: Visa,
              MasterCard & Discover
            </Item>
            <Item title="MERCHANT NAME">
              Boonli LLC (Will display on Bank/Credit Card Statement)
            </Item>
            <Item title="MINIMUM ORDER FEE">
              A $1.00 fee will be charged for orders under $10.00. This applies
              for new and changed orders.
            </Item>
            <Item title="ANNUAL REGISTRATION FEE">
              A $20.00 fee is charged with your first order only so that we can
              offer a program online.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
