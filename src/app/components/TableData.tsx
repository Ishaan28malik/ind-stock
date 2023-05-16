import React, { useState } from 'react';
import FavouritesCard from './FavouritesCard';
import StocksTable from './StocksTable';

interface SearchResult {
    c: number;
    h: number;
    l: number;
    o: number;
    pc: number;
}

interface TableDataCardProps {
    searchResults: SearchResult[];
    searchTerm: string;
    loading: boolean;
    stockName: string;
}

interface FavouriteItem extends SearchResult {
    stockName: string;
}

const TableDataCard: React.FC<TableDataCardProps> = ({
    searchResults,
    searchTerm,
    loading,
    stockName
}) => {
    const [favorites, setFavorites] = useState<FavouriteItem[]>([]);
    const handleFavoriteClick = (stock: SearchResult) => {
        const stockName = `${searchTerm}`;
        const favoriteItem: FavouriteItem = { ...stock, stockName };
        setFavorites([...favorites, favoriteItem]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-md mx-auto p-4">
                {loading ? (
                    <p>Loading...</p>
                ) : searchResults.length > 0 ? (
                    <>
                        <StocksTable handleFavoriteClick={handleFavoriteClick} searchResults={searchResults} searchTerm={searchTerm} stockName={stockName} />
                    </>
                ) : (
                    <p>No search results to display</p>
                )}
                <FavouritesCard favorites={favorites} searchTerm={searchTerm} stockName={stockName} />
            </div>
        </div>
    );
};

export default TableDataCard;
