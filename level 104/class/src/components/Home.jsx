export default function Home(props) {
    let handleClick = () => {
        props.setCount(curr => curr + 1);
    };

    return (
        <div onClick={handleClick}>
            {props.children}
        </div>
    )
}