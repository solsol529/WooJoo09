import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer"

const MainPage = () =>{
  return(
    <div className="wrapper">
      <Header/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default MainPage