'use client'
import { useState } from 'react';
import './Services/index.css';

export default function hrpayroll({ className = '' }) {
    const partnerText =
        "Are you a freight forwarder, ERP expert, compliance advisor, or tech provider? Join our trusted network and co-create real results for clients."
    const joinText = 
        "Are you a freight forwarder, ERP expert, compliance advisor, or tech provider? Join our trusted network and co-create real results for clients."
    const connectText =
        
        "Got a question or need a quick consultation?";
    
    return (
       <div className="card-container border-none">

            <div className="card bg-[gray-800] text-white rounded-lg p-3 m-3 shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Partner With Us</h3>
                <div className="card-content">
                    <p>{partnerText}</p>
                </div>
                <div className="button-container">
                    <button onClick={() => window.location.href = '/Partner'}>
                    Show More
                    </button>
                </div>
            </div>

            <div className="card bg-[gray-800] text-white rounded-lg p-3 m-3 shadow-xl">
                
                <h3 className="text-2xl font-bold mb-2">Join the Team</h3>
                        <div className="card-content">
                            <p>{joinText}</p>
                        </div>
                        <div className="button-container">
                            <button onClick={() => window.location.href = '/Careers'}>
                            Show More
                            </button>
                        </div>
                    
            </div>
            <div className="card bg-[gray-800] text-white rounded-lg p-3 m-3 shadow-xl">
                
                <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                        <div className="card-content">
                            <p>{connectText}</p>
                            <a href="mailto:info@sjglobalconsulting.com">📧 info@sjglobalconsulting.com</a>
                            <p>📞 +91 99106 28496</p>
                        </div>
                        <div className="button-container">
                            <button onClick={() => window.location.href = '/Contact'}>
                            Show More
                            </button>
                        </div>
                    
            </div>
       </div>
    );
}