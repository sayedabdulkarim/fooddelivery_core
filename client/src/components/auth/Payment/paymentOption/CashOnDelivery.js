import React from "react";

const CashOnDelivery = () => {
  return (
    <div className="web_payments_section">
      <div className="web_payments_container">
        <div className="styles_container_2U_BJoll styles_containerUx4_2R4FRGb5 web_payments_wrapper">
          {/*  */}
          <div className="web_payments_header">
            <div className="web_payments_header_container">
              <button
                className="web_payments_header_button"
                aria-label="Go Back"
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.9"
                    d="M6.81875 14.5714L1 8.23808M1 8.23808L6.81875 1.90475M1 8.23808L19 8.23808"
                    stroke="var(--arrow-color-env, #66686E)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="Header_containerContent_2n-qQAeo">
                <div className="styles_header_2m84gsh0">
                  <h4
                    className="styles_headerTitleUx4_2H9faJAq"
                    data-testid="header_title"
                  >
                    Pay on delivery
                  </h4>
                  <div
                    className="styles_headerSubtitleUx4_2w0M1AuO styles_headerSubtitleGray_1WiZKLxM"
                    data-testid="header_subtitle"
                  >
                    1 item • Total: ₹466
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="web_payments_content">
            <div className="web_payments_content_container">
              <div className="web_payments_content_wrapper">
                <div className="web_payments_content_item">
                  <div className="web_payments_content_item_description">
                    <div className="left_icon">
                      <img
                        crossorigin="anonymous"
                        className="styles-v4_iconImg_25Y5Kzks"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/instruments/4x/Cod"
                        alt=""
                      />
                    </div>
                    <div className="title">
                      <div
                        aria-label="Cash Pay cash to delivery partner  or ask for QR code to pay via UPI."
                        aria-disabled="false"
                        tabindex="0"
                        role="button"
                        className="top_text"
                      >
                        <p>Pay on Delivery (Cash/UPI)</p>
                      </div>
                      <div className="bottom_text">
                        <span>
                          Pay cash to delivery partner or ask for QR code to pay
                          via UPI.
                        </span>
                      </div>
                    </div>
                    <div className="right_icon">
                      <div className="right_icon_container">
                        <span>
                          <svg
                            width="10"
                            height="9"
                            fill="none"
                            viewBox="0 0 10 9"
                          >
                            <path
                              stroke="#fff"
                              stroke-width="2"
                              d="M1 4.429L4.112 7 9 1"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="payment_method_button">
                    <button>
                      <div>Pay ₹466 with Cash</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOnDelivery;
