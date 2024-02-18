const java = ()=>{
    return(
        <>
            <>
                <h1>
                    <b>This is Java page</b>

                </h1>
                &nbsp;
                <h1>
                    <b><mark>Route Group!!!</mark></b> in next js
                </h1>
                <ul>
                    <li>
                        Suppose we have a route http://localhost:8080/languages/java and now i have to group this route
                        which
                        will show path as
                        http://localhost:8080/java (i.e without /languages) in that case we have to add round
                        paranthesis i.e () to the folder
                        that is to be grouped which will be called as route group.
                    </li>
                    <li>
                        So now when we hit http://localhost:8080/languages/java this will throw 404
                    </li>
                    <li>
                        if we hit http://localhost:8080/java it will work
                    </li>
                </ul>
            </>
        </>
    )
}
export default java;