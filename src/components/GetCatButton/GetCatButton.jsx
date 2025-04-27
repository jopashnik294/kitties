import styles from './GetCatButton.module.scss';

export default function GetCatButton({ onClick }) {
    const handleClick = () => {
        onClick();
    };

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={handleClick}>
                Get Cat
            </button>
        </div>
    );
}