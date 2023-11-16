import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import userAxiosSecure from "../../../hook/userAxiosSecure";
import useAxios from "../../../hook/useAxios";

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = userAxiosSecure()
    const axios = useAxios();
    const onSubmit = async(data) =>  {
        console.log(data)

        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axios.post('/menu',menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added`,
                    showConfirmButton: false,
                    timer: 1500
                   });
            }
        }
        // console.log(res.data)

    }
        
    return (
        <div className="p-4 ">
           <SectionTitle heading={"add an item"} subHeading={"what's new"}></SectionTitle>
           <div>
           <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control w-full my-7">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" {...register("name", {required: true})} placeholder="Recipe name" className="input input-bordered w-full" />
</div>
<div className="flex flex-col md:flex-row gap-4">

      <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <select
      {...register("category", {required: true})}
       className="select select-primary w-full ">
  <option disabled selected>Select a category</option>
  <option value="salad">salad</option>
  <option value="pizza">pizza</option>
  <option value="soup">soup</option>
  <option value="dessert">dessert</option>
  <option value="drinks">drinks</option>
</select>
</div>
      <div className="form-control w-full">
  <label className="label">
    <span className="label-text">price</span>
  </label>
  <input type="text" {...register("price", {required: true})} placeholder="Recipe price" className="input input-bordered w-full" />
</div>
</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Recipe Details</span>
  </label>
  <textarea 
  {...register("recipe", {required: true})}
   className="textarea textarea-bordered h-24" placeholder="text details"></textarea>
</div>
<div className="form-control w-full m-5">
<input type="file" {...register("image", {required: true})} className="file-input file-input-bordered w-full max-w-xs" />
</div>
     <button className="btn btn-secondary">
       Add Item
     </button>
   
    </form>
           </div>
        </div>
    );
};

export default AddItems;