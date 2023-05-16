import React from 'react'

export default function SearchStocks(props: any) {
    const { handleSubmit, searchTerm, handleChange } = props
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="fixed top-1/4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter a search term"
                    className="rounded-l-lg p-2 flex-grow border-t border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
                />
                <button
                    type="submit"
                    className="rounded-r-lg bg-blue-500 text-white px-4 py-2 transition duration-300 hover:bg-blue-600 focus:outline-none"
                >
                    Search
                </button>
            </form>
        </div>
    )
}
