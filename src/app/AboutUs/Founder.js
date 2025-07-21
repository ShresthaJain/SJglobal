export default function Founder() {
    return (
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-2 lg:pt-3">
            <h4 className="text-2xl font-semibold mt-5 mb-4 text-gray-900">Meet Our founder - Shilpi Jain</h4>

            <div className="flex flex-col lg:flex-row items-start gap-12">

              {/* Text Section - 2/3 width */}
              <div className="w-full lg:w-2/3 lg:ml-auto text-left">
                
                <p className="mt-8 text-lg text-gray-700 sm:text-xl text-justify">
                    With a background that spans International Trade, Custom projects, and Human Resource Strategy, Shilpi Jain has spent over 15 years bridging the gap between systems and people, across both India and the U.S. Her journey from leading large-scale IT and ERP rollouts to solving real-world operational challenges inspired her to launch SJ Global Consulting, where practical solutions meet human-centered consulting. 
                    <br /> <br />She believes that businesses grow best when process, compliance, and purpose align and her mission is to help International companies expanding into India, Manufacturing Unit, Importers, Exporters, Early Stage Ventures to Established Enterprises scale with clarity, dignity, and confidence.

                </p>
                
              </div>
              {/* Image Section - 1/3 width */}
              <div className="object-center pt-20 pl-15 w-full lg:w-1/3">
                <img
                  src="/images/ShilpiJ.png"
                  alt="Founder"
                  className="w-50 h-auto rounded-full shadow-md"
                />
              </div>
            </div>
          </div>

    );
}