import React from 'react'

export default function StocksTable(props: any) {
    const { searchResults, searchTerm, handleFavoriteClick } = props;
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 px-4 py-2">Stock</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Symbol</th>
                        <th className="px-4 py-2">Current Price</th>
                        <th className="px-4 py-2">High</th>
                        <th className="px-4 py-2">Low</th>
                        <th className="px-4 py-2">Open</th>
                        <th className="px-4 py-2">Close</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((result: any, index: number) => (
                        <tr key={index}>
                            <td className="px-4 py-2">{searchTerm}</td>
                            <td className="px-4 py-2">{result.c}</td>
                            <td className="px-4 py-2">{result.h}</td>
                            <td className="px-4 py-2">{result.l}</td>
                            <td className="px-4 py-2">{result.o}</td>
                            <td className="px-4 py-2">{result.pc}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => handleFavoriteClick(result)}>
                                    ⭐
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
