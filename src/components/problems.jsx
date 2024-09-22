import React from 'react';
import '../styles/problems.css';

const Problems = () => {
    return (
        <div className="problems_container">
            <h2 className="problems_title">Save hours of repetitive workflow configuration</h2>
            <p className="problems_subtitle">
                There's no need to spend hours setting up your workflow. Gawg automates the process so you can focus on what you do best.
            </p>
            <div className="problems_blocks">
                <div className="problems_block problems_block_left">
                    <ul className="problems_list">
                        <li><span className="problems_hours">4 hrs</span> to set up workflows</li>
                        <li><span className="problems_hours">+ 6 hrs</span> designing the structure</li>
                        <li><span className="problems_hours">+ 4 hrs</span> to handle desired triggers</li>
                        <li><span className="problems_hours">+ 2 hrs</span> security scans</li>
                        <li><span className="problems_hours">+ NO</span> notification system</li>
                        <li><span className="problems_hours">+ 8 hrs</span> testing till works</li>
                        <li><span className="problems_hours">+ ∞ hrs</span> overthinking...</li>
                        <li>= <span className="problems_hours">24+ hours</span> of headaches</li>
                    </ul>
                </div>
                <p className="problems_mobile_paragraph">
                    There's a better way 🤘🏻
                </p>
                <div className="problems_block problems_block_right">
                    <ul className="problems_list">
                        <li><span className="problems_benefit">Instant</span> workflow setup</li>
                        <li><span className="problems_benefit">Easy</span> secret configuration</li>
                        <li><span className="problems_benefit">Simplified</span> deployments</li>
                        <li><span className="problems_benefit">Automated</span>notification system</li>
                        <li><span className="problems_benefit">Organized</span> release process</li>
                        <li><span className="problems_benefit">Fast</span> one-click deployments</li>
                        <li><span className="problems_benefit">Peace of mind</span> with Gawg</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Problems;