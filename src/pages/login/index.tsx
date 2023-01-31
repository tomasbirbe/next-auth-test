import { FormEvent, SyntheticEvent, useContext, useEffect } from "react";
import style from "./Login.module.css";
import { Input } from "@/components/Input";
import { AuthContext } from "@/Providers/AuthProvider";
import { signInWithEmailAndPassword } from "@/Firebase/SignInWithEmailAndPassword";

export default function LoginPage() {
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { email_input, password_input } = event.target as HTMLFormElement;

    signInWithEmailAndPassword(email_input.value, password_input.value).then((data) => {
      console.log(data);
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
