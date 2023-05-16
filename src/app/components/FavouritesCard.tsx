import React from 'react';

export default function FavoritesCard(props: any) {
    const { favorites, searchTerm, stockName } = props;

    return (
        <div className="bg-white rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold px-4 py-2">Favorite Stocks</h2>
            {favorites.length === 0 ? (
                <p className="px-4 py-2">No favorites selected.</p>
            ) : (
                <ul className='overflow-y-auto'>
                    <thead>
                        <tr>
                            <th className="px-4 py-2 font-bold">Symbol</th>
                            <th className="px-4 py-2 font-bold">Current Price</th>
                            <th className="px-4 py-2 font-bold">High</th>
                            <th className="px-4 py-2 font-bold">Low</th>
                            <th className="px-4 py-2 font-bold">Open</th>
                            <th className="px-4 py-2 font-bold">Close</th>
                        </tr>
                    </thead>
                    {favorites.map((favorite: any, index: number) => (
                        <li key={index} className="border-b border-gray-200">
                            <table className="table-auto w-full">

                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2">{favorite.stockName}</td>
                                        <td className="px-4 py-2">{favorite.c}</td>
                                        <td className="px-4 py-2">{favorite.h}</td>
                                        <td className="px-4 py-2">{favorite.l}</td>
                                        <td className="px-4 py-2">{favorite.o}</td>
                                        <td className="px-4 py-2">{favorite.pc}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
