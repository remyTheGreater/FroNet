import React, { useState } from 'react';
import './faqSection.scss';

function FaqSection() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-left">
                    <p className="faq-section-title">FAQs</p>
                    <h1 className="faq-section-heading">Frequently asked questions about FroNet</h1>
                    <button className="faq-btn" onClick={toggleShowMore}>
                        See more questions {showMore ? '<' : '>'}
                    </button>
                </div>
                <div className="faq-right">
                    <div className="faq-item">
                        <h3 className="faq-question">How to register on FroNet? </h3>
                        <div className="faq-answer">
                            <p>Answer 1</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <h3 className="faq-question">Do i have to pay for any equipment or setup?</h3>
                        <div className="faq-answer">
                            <p>Answer 2</p>
                        </div>
                    </div>
                    <div className={`faq-item ${showMore ? 'show' : ''}`}>
                        <h3 className="faq-question">What is my monthly data limit?</h3>
                        <div className="faq-answer">
                            <p>Answer 3</p>
                        </div>
                    </div>
                    <div className={`faq-item ${showMore ? 'show' : ''}`}>
                        <h3 className="faq-question">How do I activate a plan?</h3>
                        <div className="faq-answer">
                            <p>Answer 4</p>
                        </div>
                    </div>
                    <div className={`faq-item ${showMore ? 'show' : ''}`}>
                        <h3 className="faq-question">How fast is your internet?</h3>
                        <div className="faq-answer">
                            <p>Answer 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
