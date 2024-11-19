'use client';

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

type Faq = {
  question: string;
  answer: string;
};

const FaqContent = ({ faqs = [] }: { faqs?: Faq[] }) => {
  console.log(faqs);
  return (
    <>
      <div className="faq-area pt-4 pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} uuid={`a-${index}`}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {faq.question}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{faq.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
