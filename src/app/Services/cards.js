'use client'
import { useState } from 'react';

export default function hrpayroll() {
    const hrtext =
        
        "At SJ Global Consulting, we help startups and mid-sized businesses simplify and streamline their HR and payroll operations with a practical, compliance-first approach. From salary processing, statutory filings (PF, ESI, TDS), and labor law compliance to onboarding documentation and exit formalities — we manage it all. Our services also include advisory support on employment tax, bonus, gratuity, minimum wages, and employee cost structuring, helping you stay legally sound while supporting your team effectively." + 
        "\n\nAs per your company’s budget and stage of growth, we help transition manual processes into structured, semi-automated, or fully digital workflows — using tools that are efficient, scalable, and tailored to your needs. Whether you use basic spreadsheets or are ready for an HRMS, we guide you in selecting and implementing the right-fit technology without over-investing. With us, you get compliance, clarity, and control — all aligned with your operational reality.";
    const erptext = 
        
        "Unlock the power of modern ERP systems tailored to your size, stage, and sector. At SJ Global Consulting, we help startups and growing businesses transition from manual workflows to integrated ERP platforms that bring structure, visibility, and long-term scalability." +
        "\n\nBy embedding automation and intelligent process flows, we help businesses achieve real-time data accuracy, compliance readiness, and operational control. Together, we turn ERP into a foundation for sustainable, tech-enabled growth.";
    const eximtext =
        
        "At SJ Global Consulting, we help you set up and scale your Import-Export (EXIM) operations with a sharp focus on compliance, efficiency, and clarity. From documentation to DGFT and Customs advisory, we guide businesses through the entire process of establishing international trade operations that are structured, risk-free, and audit-ready." +
        "\n\nWhat sets us apart is our ability to help clients reduce shipment costs, optimize logistics, and plan exports/imports within defined budgets. We streamline vendor coordination and create step-by-step workflows to minimize delays, rework, and penalties — ensuring your global movement of goods is not only seamless but also cost-effective.";
    
    const previewLength = 150; // characters to show in preview
    const hrPreview = hrtext.slice(0, previewLength) + (hrtext.length > previewLength ? '...' : '');
    const eximPreview = eximtext.slice(0, previewLength) + (eximtext.length > previewLength ? '...' : '');
    const erpPreview = erptext.slice(0, previewLength) + (erptext.length > previewLength ? '...' : '');



    const [isShownHr, setIsShownHr] = useState(false);
    const [isShownErp, setIsShownErp] = useState(false);
    const [isShownExim, setIsShownExim] = useState(false);

    function handleClick1() {
        setIsShownHr(!isShownHr);
    }
    function handleClick2() {
        setIsShownErp(!isShownErp);
    }
    function handleClick3() {
            setIsShownExim(!isShownExim);
        }
    return (
       <div className="card-container">

            <div className="card">
                <div className={`card-inner ${isShownHr ? 'flipped' : ''}`}>
                    <div className="card-front">
                        <h3>HR & Payroll</h3>
                        <div className="card-content">
                            <p>{hrPreview}</p>
                        </div>
                        <div className="button-container">
                            <button onClick={handleClick1}>
                            Show More
                            </button>
                        </div>
                    </div>

                    <div className="card-back">
                        <h3>HR & Payroll</h3>
                        <div className="card-content">
                            <p>
                                {hrtext.split('\n').map((line, index) => (
                                    <span key={index}>
                                    {line}
                                    <br />
                                    </span>
                                ))}
                            </p>

                        </div>
                        <div className="button-container">
                            <button onClick={handleClick1}>
                            Show Less
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className={`card-inner ${isShownExim ? 'flipped' : ''}`}>
                    <div className="card-front">
                        <h3>Import & Export (EXIM) Advisory Services</h3>
                        <div className="card-content">
                            <p>{eximPreview}</p>
                        </div>
                        <div className="button-container">
                            <button onClick={handleClick3}>
                            Show More
                            </button>
                        </div>
                    </div>

                    <div className="card-back">
                        <h3>Import & Export (EXIM) Advisory Services</h3>
                        <div className="card-content">
                            <p>
                                {eximtext.split('\n').map((line, index) => (
                                    <span key={index}>
                                    {line}
                                    <br />
                                    </span>
                                ))}
                            </p>

                        </div>
                        <div className="button-container">
                            <button onClick={handleClick3}>
                            Show Less
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className={`card-inner ${isShownErp ? 'flipped' : ''}`}>
                    <div className="card-front">
                        <h3>Emerging ERP Solutions</h3>
                        <div className="card-content">
                            <p>{erpPreview}</p>
                        </div>
                        <div className="button-container">
                            <button onClick={handleClick2}>
                            Show More
                            </button>
                        </div>
                    </div>

                    <div className="card-back">
                        <h3>Emerging ERP Solutions</h3>
                        <div className="card-content">
                            <p>
                                {erptext.split('\n').map((line, index) => (
                                    <span key={index}>
                                    {line}
                                    <br />
                                    </span>
                                ))}
                            </p>

                        </div>
                        <div className="button-container">
                            <button onClick={handleClick2}>
                            Show Less
                            </button>
                        </div>
                    </div>
                </div>
            </div>


       </div>
    );
}