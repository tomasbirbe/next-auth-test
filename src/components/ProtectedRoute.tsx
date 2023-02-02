import { AuthContext } from "@/Providers/AuthProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (auth.token === "") {
      router.push("/login");
    }
  }, [auth]);


  if(auth.token !== "") {
    return <>{children}</>;
  } else {
    if(router.pathname === '/login') {
      return <>{children}</>
    } else {
      return <></>
    }
  }
}
