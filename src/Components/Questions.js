import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./Questions.css";

const data = {
    title: "FAQ (Frequently Asked Questions)",
    rows: [
        {
            title:
                "What are the Tech Used? ",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
        },
        {
            title: "What is the Use of Gan?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Where do you get your dataset?",
            content: `Yes, here is an example of a <a href="https://binodswain.github.io/react-faq-component/">link</a>`,
        },
        {
            title: "What is the package version",
            content: "v1.0.0",
        },
    ],
};

export default function WithCssStyleComp() {
    const [rows, setRowsOption] = useState(null);
    const [row, setRow] = useState(0);

    return (
        <div id="questions">
           

            <div className="faq-style-wrapper row-option">
                <Faq data={data} getRowOptions={setRowsOption} />
            </div>

            
        </div>
    );
}