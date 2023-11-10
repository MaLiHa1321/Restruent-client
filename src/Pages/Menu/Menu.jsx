import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/populerMenu/PopularMenu";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img} title={'our Menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={img} title={'our Menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={img} title={'our Menu'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;