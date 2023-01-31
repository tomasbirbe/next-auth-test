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

  return <>{children}</>;
}
