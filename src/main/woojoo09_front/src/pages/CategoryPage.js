import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Loader from '../components/Loader';
import Main from "../components/Main";

const CategoryPage = () =>{
  let { categoryName } = useParams();
  return(
    <>
    {/* <Loader/> */}
    <div className="categoryWrapper">
      <Header/>
      <Main categoryName = {categoryName}/>
      <Footer/>
    </div>
    </>
  );
}
export default CategoryPage