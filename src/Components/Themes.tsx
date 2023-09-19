import { useState } from "react";


const Themes = () => {
    const [image, setImage] = useState("https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/gx__color-theme--classic.1b752fb481b6.png")
    return (
        <div>
            <img className="px-28 py-7" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/logo-gx.8357e3484a38.svg" alt="" />
            <div className="flex items-start justify-center">
                <h1 className="w-1/3 text-[#FEFEFE] text-4xl font-semibold">Custom Themes</h1>
                <p className="w-2/4 text-[#c7b7ee] px-10">Completely customize your color scheme with Opera GX to match your gaming setup. Choose from specially designed themes, and easily select GX desktop wallpapers as a gaming background.</p>
            </div>
            <div className="relative">
                <img className="w-[86%] mx-auto py-10" src={image} alt="" />
                <div className="absolute right-24 bottom-40 flex items-center gap-5">
                    <div className="flex bg-[#251F32] p-6 justify-center gap-5 rounded-2xl w-[580px]">
                        <img onClick={() => setImage("https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/gx__color-theme--classic.1b752fb481b6.png")} className="cursor-pointer" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/selector-theme_1--gx__desktop.9f6a60d2f2a5.svg" alt="" />
                        <img onClick={() => setImage("https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/gx__color-theme--violet.9ea95d3dedac.png")} className="cursor-pointer" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/selector-theme_2--gx__desktop.c8dd24f8dedf.svg" alt="" />
                        <img onClick={() => setImage("https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/gx__color-theme--purple-haze.5aa00f498b0a.png")} className="cursor-pointer" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/selector-theme_3--gx__desktop.c1367c8a5ac3.svg" alt="" />
                        <img onClick={() => setImage("https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/gx__color-theme--white-wolf.4052925a08bb.png")} className="cursor-pointer" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/selector-theme_4--gx__desktop.7820236d4066.svg" alt="" />
                    </div>
                    <img src="https://cdn-production-opera-website.operacdn.com/staticfiles/e4e2a9ac3e7495306ef0.61f316276ca6.svg?05daef0418f4" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Themes;