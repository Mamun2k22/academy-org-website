import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleSearch = () => {
        // Implement your search logic here
        console.log(`Searching for: ${query}`);
    };

    return (
        <div className="">
            <div className="">
                <CiSearch
                    onClick={() => setShowSearchBar(!showSearchBar)}
                    className="px-4 text-black text-6xl rounded focus:outline-none"
                />
            </div>
            <div className="p-4">{/* Your content goes here */}</div>
            <div
                className={`fixed top-0 left-0  p-12 right-0 bg-white transform ${showSearchBar ? 'translate-y-0 min-h-[200px]' : '-translate-y-full h-0'
                    } transition-all duration-500 ease-in-out z-50 overflow-y-auto`}
            >
                <div className="flex items-center border-b border-[#ff4041] py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search"
                    />
                    <button
                        onClick={() => setShowSearchBar(!showSearchBar)}
                        className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
                <p className='text-gray-400 pt-2 text-sm'>Hit enter to search or ESC to close</p>
                {/* Additional content in the search section */}
            </div>
        </div>
    );
}

export default SearchBar;
