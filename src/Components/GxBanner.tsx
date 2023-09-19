
const GxBanner = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-semibold text-[#FA1E4E] text-center">What is Opera GX?</h1>
            <div className="flex items-center pt-10 justify-between">
                <p className="w-1/2 text-lg text-[#c7b7ee] px-16">Opera GX is a special version of the Opera browser built
                    specifically for gamers. The browser includes unique features like CPU, RAM and Network limiters to
                    help you get the most out of both gaming and browsing.</p>
                <img className="w-[500px]" src="https://i.ibb.co/7RH8tBM/gx-feature-laptop-gx-mobile-2x-4aa1a438e946.webp" alt="" />
            </div>
            <div className="flex justify-center gap-5 items-center pb-28">
                <div className="">
                    <img className="-mt-24 w-[500px]" src="https://i.ibb.co/2h4jCjJ/gx-mobile-android-i-OS-2x-d190a54a25f9-1.webp" alt="" />
                </div>
                <div className="w-1/2">
                    <p className="text-lg text-[#c7b7ee] pb-7">Bring your gaming style to mobile. Connect mobile
                        and desktop browsers with the file-sharing Flow feature, smoothly browse on the go with the one-hande
                        d Fast Action Button, and protect your privacy with the built-in ad blocker in the mobile browser for
                        gamers.</p>
                    <div>
                        <div className="flex gap-5 items-center pb-3">
                            <img className="w-[170px] cursor-pointer" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/components/download/googleplay/google-play--en@2x.8ee8e0cb8ab1.png" alt="" />
                            <img className="w-[170px] cursor-pointer" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/components/download/appstore/app-store--en@2x.854c0884b484.png" alt="" />
                        </div>
                        <p className="text-[#4f495e] text-sm">Don't have Google Play?</p>
                        <span className="text-[#c7b7ee] text-sm hover:underline cursor-pointer">Download the app here</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GxBanner;