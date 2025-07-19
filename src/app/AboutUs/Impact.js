import ImpactCards from './ImpactCards';
export default function Impact() {
    
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-5">
            <h4 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Making an Impact That Matters</h4>
            <p className="mt-8 text-lg text-gray-700 sm:text-xl text-justify">At SJ Global, our purpose is to make an impact that truly matters, for our clients, our collaborators, and the society we operate in.
               <br /> <br /> We partner with International company expanding into India, Manufacturing Unit, Importers, Exporters, Early Stage Ventures to Established Enterprises to simplify what often feels complex; whether in global trade, operations, ERP systems, or people policies. Our mission is to build structures that last, enable compliance without chaos, and align strategy with human dignity.
               <br /> <br /> From streamlining Import and Export processes to establishing Human Resource frameworks and workplace policies, we help growing companies stay compliant, efficient, and future-ready.
            </p>
            <h5 className="text-lg font-semibold mt-10 mb-4 text-gray-900">We offer expertise in: </h5>
            
            <ImpactCards />
        </div>
        
    );
}
