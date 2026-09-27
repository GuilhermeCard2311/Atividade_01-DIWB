const estilo = {
    logo: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'yellow',
        padding: '10px',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: '50%',
        marginRight: '10px'
    }
}

const Cabecalho = () => {

    return(
        <header style={{ display: 'flex', 
                         justifyContent : 'start',
                         alignItems: 'center', 
                         alignContent: 'center',
                         backgroundColor: '#333', 
                         color: 'white', 
                         padding: '10px' }}> 
            <div style={estilo.logo}>
                DWBE
            </div>
            <h2>
                Desenvolvimento WEB Backend
            </h2>
        </header>
    );
}

export default Cabecalho;