import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import desert from '../../assets/menu/dessert-bg.jpeg'
import soup from '../../assets/menu/soup-bg.jpg';
import piza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import useMenu from "../../hook/useMenu";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import Menucategory from "./MenuCategory/Menucategory";



const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main  */}
            <Cover img={img} title={'our Menu'}></Cover>
            {/* offered */}
            <SectionTitle heading={'Todays Offer'} subHeading={"Don't Miss"}></SectionTitle>
            <Menucategory items ={offered}></Menucategory>
            {/* deseert */}
            <Menucategory items ={dessert} title={'dessert'} coverImage={desert}></Menucategory>
            {/* pizzas */}
            <Menucategory items ={pizza} title={'pizza'} coverImage={piza}></Menucategory>
            {/* salads */}
            <Menucategory items ={salads} title={'salad'} coverImage={salad}></Menucategory>
            {/* soup */}
            <Menucategory items ={soups} title={'soup'} coverImage={soup}></Menucategory>
    
        </div>
    );
};

export default Menu;