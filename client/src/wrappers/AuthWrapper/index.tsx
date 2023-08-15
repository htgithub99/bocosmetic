import { Suspense } from "react";
import { Routes } from "react-router-dom";
import styles from "./styles.module.scss";

export default function PageWrapper() {
  // const isAuthenticated = !!Cookies.get("token");
  // const { profile } = useProfile(isAuthenticated);

  // if (!isAuthenticated) return <Navigate to="/login" />;
  // if (!profile) return null;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainWrapper}>
        <div className={styles.pageContent}>
          <Suspense>
            <Routes>
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
