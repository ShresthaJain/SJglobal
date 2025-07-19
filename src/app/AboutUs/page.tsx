import Founder from './Founder.js';
import Impact from './Impact.js';
import Values from './Values.js';

export default function about() {
    return (
        <div>
            <h2>About Us</h2>
            <Founder />
            <Impact />
            <Values />

            <div>
                <p>At SJ Global Consulting, our values are our promise. To lead with empathy, to act with honesty, to build with people, and to grow with purpose.
                   <br />Let’s turn complexity into clarity — together.</p>
            </div>

        </div>
    );
}