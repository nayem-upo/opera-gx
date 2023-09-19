
const Banner = () => {
    return (
        <div>
            <div className="text-[#FA1E4E] flex px-24 py-10">
                <h1 className="text-6xl font-semibold w-1/2">The browser for <br />gamers</h1>
                <p className="w-1/2 text-lg px-5">Get an unparalleled gaming and browsing experience on mobile and desktop.
                    Set limits on CPU, RAM, and Network usage, use Discord & Twitch from the sidebar,
                    and connect mobile and desktop browsers with the file-sharing Flow feature. <span className="text-[#c7b7ee]">See more</span></p>
            </div>
            <button className="bg-[#FA1E4E] mx-auto hover:bg-[#fa1e4ee2] duration-300 flex items-center gap-3 text-black px-12 text-lg font-extrabold py-5"> <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/38/38466.png" alt="" /> Download Opera GX</button>
        </div>
    );
};

export default Banner;