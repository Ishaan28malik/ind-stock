import React from 'react';

export default function FavoritesCard(props: any) {
    const { favorites, searchTerm, stockName } = props;

    return (
        <div className="bg-white rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold px-4 py-2">Favorite Stocks</h2>
            {favorites.length === 0 ? (
                <p className="px-4 py-2">No favorites selected.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full">
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
                            </tr>
                        </thead>
                        <tbody>
                            {favorites.map((favorite: any, index: number) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="px-4 py-4 whitespace-nowrap">{favorite.stockName}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">{favorite.c}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">{favorite.h}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">{favorite.l}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">{favorite.o}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">{favorite.pc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
