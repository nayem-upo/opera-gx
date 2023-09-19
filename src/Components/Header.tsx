import { useEffect, useState } from "react";

const Header = () => {
    const [scrollBg, setScrollBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollBg(true);
            } else {
                setScrollBg(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`sticky top-0 duration-300 ${scrollBg ? "bg-[#1C1726]" :"bg-[#131019]"} z-50`}>
            <div className={`duration-300 ${!scrollBg ? "py-5 hover:py-5 duration-300" : "py-3 hover:py-5 duration-300"} hover:bg-[#1C1726]`}>
                <div className="flex text-sm justify-between px-9 items-center text-[#c7b7ee]">
                    <div className="flex items-center">
                        <div className="flex gap-6 items-center">
                            <img className="w-[30px]" src="https://seeklogo.com/images/O/opera-logo-FD270C9492-seeklogo.com.png" alt="" />
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                Browsers
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                Features
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                        </div>
                        <div className="inline-block w-[1px] mx-7 h-6 self-stretch bg-[#c7b7ee58] opacity-100 dark:opacity-50"></div>
                        <div className="flex gap-6">
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                Products
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                Gaming
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                Web3
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                Downloads
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                        </div>
                        <div className="inline-block w-[1px] mx-7 self-stretch bg-[#c7b7ee58] h-6 opacity-100 dark:opacity-50"></div>
                        <div className="flex gap-6">
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                About
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                            <p className="relative duration-300 group cursor-pointer hover:text-[#FA1E4E] ">
                                Help
                                <span className="absolute bottom-0 left-0 w-0 bg-[#FA1E4E] h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </p>
                        </div>
                    </div>
                    <button className="bg-[#FA1E4E] hover:bg-[#fa1e4ee2] duration-300 flex items-center gap-3 text-black px-6 text-sm font-extrabold py-3"> <img className="w-3" src="https://cdn-icons-png.flaticon.com/512/38/38466.png" alt="" /> Download Opera GX</button>
                </div>
            </div>
            {
                scrollBg && <div className="bg-[#312a41] p-[0.04px]"></div>
            }
        </div>
    );
};

export default Header;