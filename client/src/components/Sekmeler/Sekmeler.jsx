import { useState } from "react";
import Yorumlar from "../Yorumlar/Yorumlar"
import PropTypes from "prop-types";
import './Sekmeler.css'

function Sekmeler({ singleProduct, setSingleProduct }) {
  const [activeSekme, setActiveSekme] = useState("desc");

  const handleSekmeClick = (e, sekme) => {
    e.preventDefault();
    setActiveSekme(sekme);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
        <a
            href="#"
            className={`tab-button ${activeSekme === "desc" ? "active" : ""}`}
            onClick={(e) => handleSekmeClick(e, "desc")}
          >
            Açıklama
          </a>
        </li>
        <li>
        <a
            href="#"
            className={`tab-button ${activeSekme === "info" ? "active" : ""}`}
            onClick={(e) => handleSekmeClick(e, "info")}
          >
            Ek Bilgiler
          </a>
        </li>
        <li>
        <a
            href="#"
            className={`tab-button ${activeSekme === "reviews" ? "active" : ""}`}
            onClick={(e) => handleSekmeClick(e, "reviews")}
          >
            Yorumlar
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div className={`tab-panel-descriptions content ${
            activeSekme === "desc" ? "active" : ""
          }`}>
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: singleProduct.description }}
          ></div>
        </div>
        <div
          className={`tab-panel-information content ${
            activeSekme === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Ek Bilgiler</h3>
          <table>
            <tbody>
              <tr>
                <th>Renk</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Beden</th>
                <td>
                <p>
                    {singleProduct.sizes.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}
                        {index < singleProduct.sizes.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Yorumlar
          active={activeSekme === "reviews" ? "content active" : "content"}
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      </div>
    </div>
  )
}

export default Sekmeler

Sekmeler.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};