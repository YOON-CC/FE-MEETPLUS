"use client";

import styles from "@/styles/layout/footer.module.scss";
import SimpleBoardTextTwo from "@/components/atoms/Text/SimpleBoardTextTwo";
import InfoText from "@/components/atoms/Text/InfoText";
import SimpleBoardTextThree from "@/components/atoms/Text/SimpleBoardTextThree";

export default function Footer() {
  return (
    <footer className={styles["footer-layout"]}>
      <div className={styles["footer-text1"]}>
        천마인력에서 서비스 되는 정보는 법원경매정보 홈페이지에서 제공되는
        정보를 사용하고 있습니다. 천마인력에서 서비스하는 정보만으로 참여한
        입찰과 관련하여 발생하는 문제에 대해서 자사는 책임을 지지 않습니다.
      </div>
      <div className={styles["footer-text2"]}>천마인력정보</div>
      <div className={styles["footer-text1"]}>
        https://github.com/SKY-HORSE-MAN-POWER
      </div>
    </footer>
  );
}