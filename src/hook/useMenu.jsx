import { useQuery } from "@tanstack/react-query";
import userAxiosSecure from "./userAxiosSecure";




const useMenu = () => {
    const axiosPublic = userAxiosSecure();
    // const [menu, setMenu] = useState([])
    // const [loading,setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch('https://final-restruent-server.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data =>  {
    //         setMenu(data)
    //         setLoading(false)
        
    //     })
        
    // },[])
    const {data: menu=[], isPending, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
    
    return [menu,isPending,refetch]
};

export default useMenu;