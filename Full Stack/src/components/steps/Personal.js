import { useStepperContext } from "../../contexts/StepperContext";
import ImageUpload from "../ImageUpload";

export default function Personal() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["name"] || ""}
            name="name"
            placeholder="Name"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Age
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["age"] || ""}
            name="age"
            placeholder="Age"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {/* <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
          type='file'
          onChange={handleChange}
          value={userData["image"] || ""}
          name="image"
          placeholder="Image"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div> */}
        <ImageUpload />
      </div>
    </div>
  );
}
