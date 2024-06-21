import Title from "../LandingPage/Compo/Title";
import styles from "./Styles/admin.module.css";

const userProofs = [
    {
        firstname: "John",
        lastname: "Doe",
        proofs: ["proof1.jpg", "proof2.jpg"]
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        proofs: ["proof1.jpg", "proof2.jpg"]
    },
    {
        firstname: "Gift",
        lastname: "Jackson",
        proofs: ["proof1.pdf", "proof2.jpg"]
    },
    {
        firstname: "Alexander",
        lastname: "Paul",
        proofs: ["proof1.jpg", "proof2.pdf"]
    }
];

const Proofs = () => {
    return (
        <main>
            <div>
                <Title title="Payment Proofs" subtitle="Confirm user transactions here..." />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    {userProofs.map((data, index) => (
                        <div key={index} className={styles.user}>
                            <h4>{`${data.firstname} ${data.lastname}`}</h4>
                            <p>Proofs:</p>
                            <ul className={styles.list}>
                                {data.proofs.map((proof, proofIndex) => (
                                    <li key={proofIndex}>
                                        <a href={`/${proof}`} target="_blank" rel="noopener noreferrer">
                                            {proof}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Proofs;
