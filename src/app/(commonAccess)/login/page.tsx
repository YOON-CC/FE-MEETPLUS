import Image from "next/image";
import styles from "@/styles/login/login.module.scss";
import LoginBtn from "./_component/LoginBtn";

export default function Page() {
  const LoginLogo = "/images/login/loginLogo.png";

  return (
    <main className={styles["login-main-frame"]}>
      <Image src={LoginLogo} alt="" width={500} height={500} />
      <LoginBtn />
    </main>
  );
}