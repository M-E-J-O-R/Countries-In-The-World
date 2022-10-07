const Error = () => {
    const style={
        color:'white',
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
    return (<>
    <div style={style}>
        <h1>Error 404 : Page Not Found</h1>
    </div>

    </>  );
}
 
export default Error;