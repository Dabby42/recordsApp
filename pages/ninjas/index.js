import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {ninjas: data}
    }
}

const ninjas = (props) => {
    return ( 
        <div>
            <h1>All ninjas</h1>
            {props.ninjas.map((ninja)=> (
                <div className={styles.single} key={ninja.id}>
                    <Link href={"/ninjas/" + ninja.id}>
                        <h3>{ninja.name}</h3>
                    </Link> 
                </div>  
            ))}
        </div>
     );
}
 
export default ninjas;