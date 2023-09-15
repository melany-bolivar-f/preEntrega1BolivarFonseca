import Button from "./Button";
import CartWidget,{Notificacion} from "./CartWidget";

const style={
  boderRadius: 5,
  backgroundColor: "blue",
}

const sendMessage=()=>{
  console.log("ESTA ES UNA PESTAÑA")
};

function NavBar() {
    return(
      <nav>
        <Button 
          id="form-contact"
          style={style} 
          className="btn btn-primary" 
          type="button" 
          disabled={false} 
          text="Inicio" 
          onClick={sendMessage}
        />
        <Button 
          id="form-contact"
          style={style} 
          className="btn btn-primary" 
          type="button" 
          disabled={false} 
          text="Tenis" 
          onClick={sendMessage}
        />
        <Button 
          id="form-contact"
          style={style} 
          className="btn btn-primary" 
          type="button" 
          disabled={false} 
          text="Ropa" 
          onClick={sendMessage}
        />
        <Button 
          id="form-contact"
          style={style} 
          className="btn btn-primary" 
          type="button" 
          disabled={false} 
          text="Accesorios" 
          onClick={sendMessage}
        />
        <CartWidget/>
        <Notificacion count="8" />
      </nav>  
    );
};

export default NavBar;
