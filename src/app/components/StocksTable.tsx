import React from 'react';

export default function StocksTable(props: any) {
    const { searchResults, searchTerm, handleFavoriteClick } = props;
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4 px-4 py-2">Stock</h2>
            <div className="inline-block min-w-full overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                Symbol
                            </th>
                            <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                Current Price
                            </th>
                            <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                High
                            </th>
                            <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                Low
                            </th>
                            <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                Open
                            </th>
                            <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                Close
                            </th>
                            <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((result: any, index: number) => (
                            <tr key={index}>
                                <td className="px-4 py-4">{searchTerm}</td>
                                <td className="px-4 py-4">{result.c}</td>
                                <td className="px-4 py-4">{result.h}</td>
                                <td className="px-4 py-4">{result.l}</td>
                                <td className="px-4 py-4">{result.o}</td>
                                <td className="px-4 py-4">{result.pc}</td>
                                <td className="px-4 py-4">
                                    <button
                                        className="text-yellow-500 hover:text-yellow-700"
                                        onClick={() => handleFavoriteClick(result)}
                                    >
                                        ⭐
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
