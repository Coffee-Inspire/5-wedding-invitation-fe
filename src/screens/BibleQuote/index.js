import React from "react";

import "./index.scss";

function BibleQuote() {
  const verse =
    "Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.";
  const title = "Matius 19:5-6 (TB)";
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
