import React from "react";

import "./field-box.style.css";

const FieldCard = ({cardHeader, cardBody, cardFooter}) => {
    return (
        <div className="field-card">
            <div className="card bg-dark text-white">
                { cardHeader }
                <div className="card-body">
                    { cardBody }
                </div>
                <div className="card-footer">
                    { cardFooter }
                </div>
            </div>
        </div>
    )
};

export default FieldCard;