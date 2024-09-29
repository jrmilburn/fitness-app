import styles from './button.module.css';

export default function Button( { text, onClick } ) {

    return (
        <>
            <button onClick={onClick} className={styles['custom-button']}>
                {text}
            </button>
        </>
    )

}