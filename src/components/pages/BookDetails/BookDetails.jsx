import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();
    const expectedBook = books.find(book => book.bookId == id);

    const {handleMarkAsRead, storedBooks} = useContext(BookContext)
    // console.log(handleMarkAsRead, storedBooks)
    

    return (
        <div className="w-11/12 mx-auto py-14">
            <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

                {/* Left */}
                <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-10 lg:w-2/5">
                    <img src={expectedBook.image} alt={expectedBook.bookName} className="max-h-96 w-auto rounded-lg object-cover" />
                </div>

                {/* Right */}
                <div className="lg:w-3/5 flex flex-col justify-center gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-1">{expectedBook.bookName}</h1>
                        <p className="text-gray-400 text-sm">By : {expectedBook.author}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Category</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">{expectedBook.category}</span>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            <span className="font-semibold text-gray-800">Review : </span>
                            {expectedBook.review}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-700">Tags</span>
                        {expectedBook.tags.map(tag => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600 font-medium">#{tag}</span>
                        ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs text-gray-400 mb-1">Number of Pages</p>
                            <p className="text-sm font-bold text-gray-800">{expectedBook.totalPages}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs text-gray-400 mb-1">Publisher</p>
                            <p className="text-sm font-bold text-gray-800">{expectedBook.publisher}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs text-gray-400 mb-1">Year of Publishing</p>
                            <p className="text-sm font-bold text-gray-800">{expectedBook.yearOfPublishing}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs text-gray-400 mb-1">Rating</p>
                            <p className="text-sm font-bold text-gray-800">{expectedBook.rating} ⭐</p>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button onClick={()=> handleMarkAsRead(expectedBook)} className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition">Mark as Read</button>
                        <button className="px-6 py-2 rounded-xl bg-cyan-400 text-white text-sm font-medium hover:bg-cyan-500 transition">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;