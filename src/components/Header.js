import React, { useEffect, useState } from "react";
import logo from "@/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { HeaderMenu } from "@/util/HeaderMenu";
import classnames from "classnames";
// import { CaretDownOutlined } from "@ant-design/icons";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);

    // return clearTimeout(interval);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="header">
        <div className="container-fluid gap-3">
          <div className="navbar-brand d-flex align-items-center justify-content-between ">
            <div className="logo-container d-flex align-items-center gap-3 ">
              <Link href="/" className="logo me-auto">
                <Image src={logo} alt="" className="img-fluid" />
              </Link>
              <div className="brand-name-container">
                <h1 className="logo me-auto">
                  <Link href="/" className="group-name">
                    ASTHA GROUP UK LTD
                  </Link>
                </h1>
                <h6 className="m-0 color-secondary logo-slogan">
                  Pharmaceutical Experts
                </h6>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {HeaderMenu?.map((item) => {
                return item?.subMenu ? (
                  <li className="nav-item dropdown" key={item?.key}>
                    <Link
                      className={
                        "scrollto nav-link d-flex gap-2 dropdown-toggle"
                      }
                      href={item?.path || ""}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.name}
                      {item?.subMenu ? (
                        <i className="bx bx-caret-down fs-5 "></i>
                      ) : null}
                    </Link>
                    <ul className="dropdown-menu">
                      {item?.subMenu?.map((subItem) => {
                        return (
                          <li key={subItem?.key}>
                            <Link
                              className="dropdown-item"
                              href={subItem?.path || ""}
                            >
                              {subItem?.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={item?.key} className="nav-item">
                    <Link
                      className={classnames("scrollto nav-link d-flex gap-2 ", {
                        getstarted: item.key === "contact",
                      })}
                      href={item?.path || ""}
                      aria-current="page"
                    >
                      {item.key === "contact" ? (
                        <i className="bx bxl-telegram contact-icon"></i>
                      ) : null}
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item whatsapp-link-container">
                <div className="order-online-container">Order online</div>
                <Link
                  href="https://wa.me/message/AEKLMX3VSLJYL1"
                  className="whatsapp-header"
                >
                  <i className="bx bxl-whatsapp"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
