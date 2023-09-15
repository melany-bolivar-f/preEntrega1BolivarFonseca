


const icono= process.env.PUBLIC_URL+"./carrito.png"

const Notificacion=({count})=>{
    return(
        <div className="estilo">{count}</div>
    )
}

function CartWidget(){
    return(
        <div>
            <img src={icono} alt="carrito"  width={40} height={40} />
        </div>
    )
}

export default CartWidget;
export {Notificacion};
