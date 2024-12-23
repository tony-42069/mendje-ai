import React from 'react';
import { CheckCircle, ShieldCheck, Rocket, MessageCircleQuestion } from 'lucide-react';
import { translations } from '../translations/al'; // Corrected import path

const Home = () => {
    return (
        <div className="bg-gray-900 text-white pb-16">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/albania-coast.jpg')",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backgroundBlendMode: "overlay"
                }}>
                <div className="text-center z-10">
                    <h1 className="text-5xl font-bold mb-4 tracking-wide">{translations.homeHeroTitle}</h1>
                    <p className="text-lg mb-8 opacity-90">{translations.homeHeroSubtitle}</p>
                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95">
                        {translations.homeHeroButton}
                    </button>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-center mb-10">{translations.pricingTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{translations.basicPlanName}</h3>
                            <p className="text-5xl font-bold mb-4">${translations.basicPlanPrice}<span className="text-sm ml-1">/muaj</span></p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> {translations.basicPlanFeature1}</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> {translations.basicPlanFeature2}</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> {translations.basicPlanFeature3}</li>
                            </ul>
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95 mt-4">
                           {translations.choosePlanButton}
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{translations.premiumPlanName}</h3>
                            <p className="text-5xl font-bold mb-4">${translations.premiumPlanPrice}<span className="text-sm ml-1">/muaj</span></p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> {translations.premiumPlanFeature1}</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> {translations.premiumPlanFeature2}</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> {translations.premiumPlanFeature3}</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> {translations.premiumPlanFeature4}</li>
                            </ul>
                        </div>
                         <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95 mt-4">
                            {translations.choosePlanButton}
                        </button>
                    </div>
                </div>
            </div>


            {/* Benefits Section */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-center mb-10">{translations.benefitsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {/* Benefit Item 1 */}
                    <div className="text-center">
                        <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-red-500" />
                         <h3 className="text-xl font-semibold mb-2">{translations.benefit1Title}</h3>
                        <p className="text-gray-300">{translations.benefit1Description}</p>
                    </div>

                    {/* Benefit Item 2 */}
                     <div className="text-center">
                        <Rocket className="w-12 h-12 mx-auto mb-4 text-red-500" />
                        <h3 className="text-xl font-semibold mb-2">{translations.benefit2Title}</h3>
                         <p className="text-gray-300">{translations.benefit2Description}</p>
                    </div>


                    {/* Benefit Item 3 */}
                     <div className="text-center">
                         <MessageCircleQuestion className="w-12 h-12 mx-auto mb-4 text-red-500" />
                        <h3 className="text-xl font-semibold mb-2">{translations.benefit3Title}</h3>
                         <p className="text-gray-300">{translations.benefit3Description}</p>
                    </div>
                </div>
            </div>

             {/* FAQ Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-center mb-10">{translations.faqTitle}</h2>
                <div className="space-y-6">
                   <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-2">{translations.faqQuestion1}</h3>
                        <p className="text-gray-300">{translations.faqAnswer1}</p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">{translations.faqQuestion2}</h3>
                         <p className="text-gray-300">{translations.faqAnswer2}</p>
                    </div>

                     <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">{translations.faqQuestion3}</h3>
                         <p className="text-gray-300">{translations.faqAnswer3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;