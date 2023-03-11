const VStack = ({children}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {children}
        </div>
    )
}

export default VStack;
