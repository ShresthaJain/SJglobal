import ImpactCards from './ImpactCards';
export default function Impact() {
    
    return (
        <div className="relative px-6 pt-16 sm:pt-48 lg:px-8 lg:pt-3">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-5">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <div className='w-full lg:w-1/3'>
                        <img
                            src="/images/orange.jpeg"
                            alt="impact image 2"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        <br />
                        
                    </div>

                <div className="w-full lg:w-2/3 lg:ml-auto text-left">
                    <h4 className="text-2xl font-semibold mb-4 text-gray-900">Making an Impact That Matters</h4>
                    <p className="mt-3 text-lg text-gray-700 sm:text-xl text-justify">At SJ Global, our purpose is to make an impact that truly matters, for our clients, our collaborators, and the society we operate in.
                    <br /> <br /> We partner with International company expanding into India, Manufacturing Unit, Importers, Exporters, Early Stage Ventures to Established Enterprises to simplify what often feels complex; whether in global trade, operations, ERP systems, or people policies. Our mission is to build structures that last, enable compliance without chaos, and align strategy with human dignity.
                    </p>
                </div>    
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="w-full lg:w-2/3 lg:ml-auto text-left">
                    <p className="mt-3 text-lg text-gray-700 sm:text-xl text-justify">From streamlining Import and Export processes to establishing Human Resource frameworks and workplace policies, we help growing companies stay compliant, efficient, and future-ready.
                    </p>
                </div>

                    <div className='w-full lg:w-1/3'>
                        
                    <img
                            src="/images/balls.jpeg"
                            alt="Impact image"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        
                    </div>

                    
            </div>

            
            
            
            
            <h5 className="text-lg font-bold mt-10 mb-4 text-gray-1000">We Offer Expertise In </h5>
            
            <ImpactCards />
        </div>
        </div>
        
    );
}
