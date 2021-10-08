import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Iframe from "react-iframe";

export default function Home() {
    return (
        <div style={{ width: "100%", height: "99vh" }}>
            <Iframe
                url="http://ria.ru/"
                width="100%"
                height="100%"
                id="myId"
                // className="myClassname"
                display="initial"
                position="relative"
            />
        </div>
    );
}
