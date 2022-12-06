import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Detail from '../components/Detail';

const DetailPage = () =>{
  let { tradeNum } = useParams();

  return(
    <div className="detailWrapper">
      <Header/>
      <Detail/>
      <Footer/>
    </div>
  );
}
export default DetailPage