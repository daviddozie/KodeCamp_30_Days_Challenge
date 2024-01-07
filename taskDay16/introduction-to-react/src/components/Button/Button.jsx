export default function Button({
    type,
    styles,
    label,
}) {
    return (
        <div>
            <button typeof={type} className={styles}>{label}</button>
        </div>
    )
}