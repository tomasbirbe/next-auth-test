import * as jwt from "jose";

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Need to specify emal and password");
  }

  const secret = new TextEncoder().encode("tomas");

  await setTimeout(() => {}, 3000);

  let token = await new jwt.SignJWT({ email, password })
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);

  return token;
};
