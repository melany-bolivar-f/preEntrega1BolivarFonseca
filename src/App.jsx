
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";



function App() {

  const saludo=()=>{
    console.log("hola mundo!")
  }
  saludo();

  return(
    <div>
      <Header/>
      <NavBar/>
      <ItemListContainer greeting="Bievenidos"/>
      Hola mundo
      <Footer/>
    </div>
  )
}

export default App;

