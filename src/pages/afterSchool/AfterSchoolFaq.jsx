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
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
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

const AfterSchoolFaq = () => {
    return (
        <div>
            {/* Faq question cover */}

            <div className=' mt-4'>

                <div className=" bg-[#0D5EBA] relative">
                    <div className="flex flex-col-reverse sm:flex-row justify-center items-center h-[130px] px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 gap-5">
                        <h1 className=" text-center text-white font-[600] lg:text-[44px] sm:text-[32px] mx-auto">
                            A Few Common Questions
                        </h1>
                    </div>
                </div>

            </div>

            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl sm:mx-auto lg:max-w-5xl">
                    <div class="space-y-6">
                        <Item title="What do the kids do when the weather doesn't permit outdoor activities?">
                            Students will participate in the alternative activity that is listed. Essentially, students will be will allowed to utilize All-Star Academy's amenities including the playground area.
                        </Item>
                        <Item title="How do I sign up?">
                            Please fill out the form above and someone will be in touch within 3 business days.
                        </Item>
                        <Item title="How does billing work?">
                            You will be billed automatically on the 1st of the month. You will need to select your schedule, including transportation needs, 7 days before the 1st of the month.
                        </Item>
                        <Item title="Grades and ages for this program?">
                            Kindergarten - 5th grade. Respectively 5-11 years old. Some 4 year olds may attend on a case-by-case basis; please fill out the interest form above.
                        </Item>
                        <Item title="I need transportation from a different school than the ones listed;  is there an option for me?">
                            Possibly. Please fill out the form above and someone we will be in touch within 3 business days.
                        </Item>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AfterSchoolFaq;