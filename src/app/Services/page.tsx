import Services from './serviceslist.js';
import Cards from './cards.js';

export default function services() {
    return(
        <div>
            <h3>Our Services</h3>
            <p> At SJ Global Consulting, we offer customized, end-to-end business solutions that simplify operations, ensure compliance, and prepare your organization for scalable, sustainable growth. Our services are designed specifically for startups, small and mid-sized businesses seeking clarity, structure, and strategy in their core processes. </p>
            <Services />
            <p>Custom Solutions | Co-Sourcing | Project Support
               <br />We understand that one model doesn’t fit all. Whether you need outsourced support, staff augmentation, or project-based consulting, we deliver practical, hands-on solutions that align with your team and goals.
               <br />Let’s build smarter, stronger operations — together.
            </p>
            <Cards />


        </div>
    );
}