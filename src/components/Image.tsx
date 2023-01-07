export function Image(props){
    return (
        <img src={props.src} alt={props.alt} {...props} />
    )
}