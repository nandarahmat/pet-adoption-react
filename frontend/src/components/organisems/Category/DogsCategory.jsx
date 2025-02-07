import { Link } from "react-router-dom";
import ImgPet from "../../../assets/images/animal-1.png";

function DogCategory() {
  return (
    <>
      <div>
        <div className="text-center text-4xl font-bold pt-[140px]">
          <h1 className="" style={{ fontFamily: "Poppins" }}>
            Dogs Category
          </h1>
        </div>

        <div className="grid grid-cols-3 justify-items-center mx-32 pt-[50px] mb-[100px]">
          <div className="w-[257px] h-[281px] bg-white rounded-[15px] shadow mt-[30px] ">
            <Link to="/details">
              <img className="w-[176px] rounded-[15px] mx-auto py-2" src={ImgPet} />
            </Link>
            <div className=" text-black px-10 text-sm font-bold font-['Poppins']">Name</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">1 years old</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">Male</div>
          </div>
          <div className="w-[257px] h-[281px] bg-white rounded-[15px] shadow mt-[30px]">
            <Link to="/details">
              <img className="w-[176px] rounded-[15px] mx-auto py-2" src={ImgPet} />
            </Link>
            <div className=" text-black px-10 text-sm font-bold font-['Poppins']">Name</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">1 years old</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">Male</div>
          </div>
          <div className="w-[257px] h-[281px] bg-white rounded-[15px] shadow mt-[30px]">
            <Link to="/details">
              <img className="w-[176px] rounded-[15px] mx-auto py-2" src={ImgPet} />
            </Link>
            <div className=" text-black px-10 text-sm font-bold font-['Poppins']">Name</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">1 years old</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">Male</div>
          </div>

          <div className="w-[257px] h-[281px] bg-white rounded-[15px] shadow mt-[30px] ">
            <Link to="/details">
              <img className="w-[176px] rounded-[15px] mx-auto py-2" src={ImgPet} />
            </Link>
            <div className=" text-black px-10 text-sm font-bold font-['Poppins']">Name</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">1 years old</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">Male</div>
          </div>
          <div className="w-[257px] h-[281px] bg-white rounded-[15px] shadow mt-[30px]">
            <Link to="/details">
              <img className="w-[176px] rounded-[15px] mx-auto py-2" src={ImgPet} />
            </Link>
            <div className=" text-black px-10 text-sm font-bold font-['Poppins']">Name</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">1 years old</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">Male</div>
          </div>
          <div className="w-[257px] h-[281px] bg-white rounded-[15px] shadow mt-[30px]">
            <Link to="/details">
              <img className="w-[176px] rounded-[15px] mx-auto py-2" src={ImgPet} />
            </Link>
            <div className=" text-black px-10 text-sm font-bold font-['Poppins']">Name</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">1 years old</div>
            <div className=" text-black px-10 text-sm font-normal font-['Poppins']">Male</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DogCategory;
