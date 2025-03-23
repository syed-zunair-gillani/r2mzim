import React, { useState } from "react";

const tabs = ["market leaders", "merchandising support"];

const TransportTabs = () => {
    const [activeTab, setActiveTab] = useState("market leaders");

    const tabContent = {
        "market leaders": {
            title: "market leaders",
            description:
                "Warpack and Dpack are market leaders in the sales and merchandising industry in Zimbabwe, providing you with hassle free nationwide coverage 365 days a year. Our main objective is to help you increase your presence in the market place and drive sales to grow your business.",
            services: [
                "National based account management",
                "Assist with product launches",
                "High-speed delivery of products to the shelf",
                "Instore sales and merchandising",
                "Display activity",
                "Marketing assistance",
                "Market intelligence",
                "Planogram execution"
            ],
            imgUrl: "/images/Merchandising-R2M-Zimbabwe.jpg"
        },
        "merchandising support": {
            title: "merchandising support",
            imgUrl: "/images/Merchandising-R2M.jpg",
            description:
                "Whether you’re looking for short-term tactical merchandising support or wish to develop a long-term relationship, Warpack and Dpack will work with you to find a prompt, efficient and cost-effective solution to suit your requirements. Our strength lies in our numbers with over 450 fully trained and experienced merchandising staff across all major towns and cities across Zimbabwe - see below for a map showing our numbers.  Our sales and merchandising team service all formal retail and wholesale outlets in Zimbawe including SPAR, OK, TM PnP Zimbabwe, Greens, N Richards, Metro Peech and Browne Wholesalers, Choppies and many other retailers.",
            services: [
                "Express Delivery",
                "International Shipping",
                "Secure Handling",
                "Cargo Management",
                "Air Logistics",
            ],
        },
    };

    return (
        <section className="max-w-5xl mx-auto p-6 bg-white mb-12">
            {/* Tabs */}
            <div className="flex border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 capitalize font-semibold ${activeTab === tab ? " bg-[#2277BC] text-white" : "text-gray-600 bg-gray-100"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="border">
                {/* Tab Content */}
                <div className="p-7">
                    <h2 className="text-xl font-bold capitalize">{tabContent[activeTab].title}</h2>
                    <p className="mt-3 text-gray-700">{tabContent[activeTab].description}</p>

                    {/* Services List */}
                    <div className="flex mt-5 items-start gap-5 justify-between">
                        <div className="grid grid-cols-2 gap-4">
                            {tabContent[activeTab].services.map((service, index) => (
                                <div key={index} className="flex items-center space-x-2 text-gray-700">
                                    <span className="text-[#2277BC]">✔</span>
                                    <p>{service}</p>
                                </div>
                            ))}
                        </div>
                        <figure className="border p-1">
                            <img
                                src={tabContent[activeTab].imgUrl}
                                alt="Transport Illustration"
                                className="w-64"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransportTabs;
