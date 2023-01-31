import style from "./Login.module.css";
import { Input } from "@/components/Input";

export default function LoginPage() {
  return (
    <main className={style.main}>
      <form className={style.form}>
        <h1>Log in</h1>
        <Input placeholder="tomas.birbe@gmail.com" type="text" />
        <Input placeholder="*******" type="password" />
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
