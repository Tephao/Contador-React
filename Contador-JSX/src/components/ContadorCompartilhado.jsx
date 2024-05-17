export default ({ count, add }) => {

    return (
        <>
            <button onClick={add}>
                Contador compartilhado: {count}
            </button>
        </>
    );
}