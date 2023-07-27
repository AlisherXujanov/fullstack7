function Test1(props) {
    return (
        <div>
            <Test2 data={props.children}/>
        </div>
    )
}
function Test2(props) {
    return (
        <div>
            <p>{props.data}</p>
        </div>
    )
}


function Heading({ children }) {
    return (
        <>
            <h1>Test Component</h1>
            <hr />

            <Test1>
                {children}
            </Test1>
        </>
    )
}
export default Heading