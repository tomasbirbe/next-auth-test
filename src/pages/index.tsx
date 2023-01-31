import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <>
      <h1>Hello, World!</h1>
      <h2>This is a test auth</h2>
      <p>The objective of this is try to make a website with Firebase Auth on the client</p>
    </>
  );
}
