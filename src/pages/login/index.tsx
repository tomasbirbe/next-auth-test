import { FormEvent, SyntheticEvent, useContext, useEffect } from "react";
import style from "./Login.module.css";
import { Input } from "@/components/Input";
import { AuthContext } from "@/Providers/AuthProvider";
import { signInWithEmailAndPassword } from "@/Firebase/SignInWithEmailAndPassword";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [auth, setAuth] = useContext(AuthContext);
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email_input, password_input } = event.target as HTMLFormElement;

    signInWithEmailAndPassword(email_input.value, password_input.value).then((data) => {
      setAuth(data);
      router.push("/");
    });
  }

  return (
    <main className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <Input id="email_input" placeholder="tomas.birbe@gmail.com" type="text" />
        <Input id="password_input" placeholder="*******" type="password" />
        <div className={style.form__footer}>
          <button className={style.registerButton} type="button">
            Register
          </button>
          <button className={style.loginButton} type="submit">
            Log in
          </button>
        </div>
      </form>
    </main>
  );
}
