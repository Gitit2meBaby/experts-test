import React from "react";
import Image from "next/image";

import styles from "../styles/header.module.css";

import maps from "../public/icons/maps.png";
import emailSlide from "../public/icons/emailSlide.png";
import Link from "next/link";

const HeadTop = () => {
  return (
    <div className={styles.headTop}>
      <p>Office Experts Group</p>

      <div className={styles.topContacts}>
        <div>
          <Image src={maps} alt="Location" width={9} height={9} />
          <span>Australia Wide</span>
        </div>
        <div>
          <Link href="mailto:consult@wordexperts.com.au">
            <Image src={emailSlide} alt="email" width={9} height={9} />
            consult@wordexperts.com.au
          </Link>
        </div>

        <div>
          <Link href="tel:+61-1300-12-20-38">
            <Image src={emailSlide} alt="email" width={9} height={9} />
            +61 1300 122 038
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadTop;
