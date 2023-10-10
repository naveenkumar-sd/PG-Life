
function Box(props)
{
    return(
        <div className="box">
        <h1 id="abc">{props.heading}</h1>
        <p>This is test paragraph which is created by react.
            this paragraph has no attribute and is contained inside a div which is also created by React.</p>

    </div>
    );
}


function App(){
    return(
        <div className="row">
            <div className="col">
                <Box heading="first heading" />
            </div>
            <div className="col">
                <Box heading="second heading"/>
            </div>
        </div>
    )
}




ReactDOM.render(
    <App />,
    document.getElementById("react-container")
);