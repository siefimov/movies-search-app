import React from 'react';

const Filters = ({
    genres,
    selectedGenres,
    selectedYearFrom,
    selectedYearTo,
    selectedScore,
    handleGenreClick,
    setSelectedYearFrom,
    setSelectedYearTo,
    setSelectedScore,
    handleSearch,
}) => {
    return (
        <div className='mx-4 box-border flex max-w-[300px] flex-col rounded bg-[#203048] p-4 shadow shadow-slate-600 h-fit'>
            <h2 className='py-4 mb-4 text-center font-bold uppercase border-b tracking-widest text-[#38bdf8]'>
                Filters
            </h2>
            <div className='border-b border-slate-300 pb-4'>
                <h2 className='mb-3 text-[#b5cdf5]'>Genres</h2>
                <div className='text-white'>
                    {genres.map((genre) => (
                        <button
                            key={genre.id}
                            onClick={() => handleGenreClick(genre.id)}
                            className={`${
                                selectedGenres.includes(genre.id)
                                    ? 'active-genre'
                                    : undefined
                            } mr-2 mb-1 rounded-2xl border px-2 hover:bg-slate-500`}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2 border-b border-slate-300 py-4'>
                <h2 className='text-[#b5cdf5]'>Release Dates</h2>
                <div className='flex'>
                    <label
                        htmlFor='from-year'
                        className='w-12 text-[12px] text-slate-300'
                    >
                        from
                    </label>
                    <input
                        name='from-year'
                        className='rounded px-2'
                        type='text'
                        placeholder='From year'
                        value={selectedYearFrom}
                        onChange={(e) => setSelectedYearFrom(e.target.value)}
                    />
                </div>
                <div className='flex'>
                    <label
                        htmlFor='to-year'
                        className='w-12 text-[12px] text-slate-300'
                    >
                        to
                    </label>
                    <input
                        className='rounded px-2'
                        name='to-year'
                        type='text'
                        placeholder='To year'
                        value={selectedYearTo}
                        onChange={(e) => setSelectedYearTo(e.target.value)}
                    />
                </div>
            </div>
            <div className='py-4'>
                <h2 className='mb-2 text-[#b5cdf5]'>User Score</h2>
                <input
                    className='rounded px-2'
                    type='text'
                    placeholder='Score'
                    value={selectedScore}
                    onChange={(e) => setSelectedScore(e.target.value)}
                />
            </div>
            <button
                onClick={handleSearch}
                className='mt-4 rounded-xl border px-2 py-1 text-white bg-[#0f172a] hover:bg-[#02587d]'
            >
                Search
            </button>
        </div>
    );
};

export default Filters;
