"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TableDataCard from './TableData';
import SearchStocks from './SearchStocks';

interface SearchResult {
    c: number;
    h: number;
    l: number;
    o: number;
    pc: number;
}

const StockData: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [stockName, setStockName] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${searchTerm}&token=bqhq9i7rh5rbubolrqd0`);
            const data = await response.json();

            if (data && data.c) {
                setSearchResults([data]);
            } else {
                setSearchResults([]);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults([]);
        }
        setLoading(false);
        setStockName(searchTerm);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <SearchStocks handleSubmit={handleSubmit} searchTerm={searchTerm} handleChange={handleChange} />
            <TableDataCard
                searchResults={searchResults}
                searchTerm={searchTerm}
                loading={loading}
                stockName={stockName}
            />
        </div>
    );
};

export default StockData;
