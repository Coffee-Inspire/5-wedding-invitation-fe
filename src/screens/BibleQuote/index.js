import React from "react";

import "./index.scss";

function BibleQuote() {
  const verse =
    '"Aku bersukaria di dalam TUHAN, jiwaku bersorak-sorai di dalam Allahku, sebab Ia mengenakan pakaian keselamatan kepadaku dan menyelubungi aku dengan jubah kebenaran, seperti pengantin laki-laki yang mengenakan perhiasan kepala dan seperti pengantin perempuan yang memakai perhiasannya."';
  const title = "Yesaya 61:10";
  return (
    <div className="cst-bible-quote-container d-flex justify-content-center align-items-center">
      <div className="cst-bible-quote-frame d-flex  justify-content-center  align-items-center">
        <div className="cst-bible-quote-content">
          <h5 className="">{verse}</h5>
          <h5 className="mt-2">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default BibleQuote;
