
const settings = ()=>{
    return(
        <>
            <h1>
                This is a nested route page.
            </h1>
            <div>

                How to create nested routing in next js :
                E.g : http://localhost:8080/userlist/settings
                1) create a folder userlist and place page.tsx file in it. (this creates a route like http://localhost:8080/userlist)
                2) now to go one level deeper create a folder called as settings and place a new file page.tsx in it.
                (this creates a route like http://localhost:8080/userlist/settings)
            </div>
        </>
    )
}
export  default settings;