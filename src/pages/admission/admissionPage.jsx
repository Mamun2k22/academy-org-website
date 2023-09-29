/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import "../contact/contact";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setStudent } from "../../redux/admissionSlice/admissionSlice";


const AdmissionPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState('')
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    const studentInfo = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName
      },
      birthday: data.birthday,
      currentGrade: data.currentGrade,
      gender: data.gender,
      disabilities: isChecked === "yes" ? true : false
    }
    console.log(studentInfo)
    dispatch(setStudent(studentInfo))
    reset()
    navigate('/admissionform')
  }
  return (
    <div className="my-20 lg:w-7/12 mx-auto px-10">
      <h1 className="text-3xl lg:text-4xl font-bold text-center">Admissions & Tuition</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <h1 className="text-2xl lg:text-3xl text-center my-5">Fill out the form below.</h1>
        <div>
          <h1 className="my-5">Step 1 of 2</h1>
          <div className="w-full h-[22px] rounded-full bg-gray-200 text-center">
            <div className="bg-blue-600 w-1/2 h-[22px] rounded-l-full">
              <h2 className=" text-right text-white -mt-[4px]"> 50% </h2>
            </div>
          </div>
        </div>
        <div className="border-b">
          <h1 className="text-3xl font-bold py-5">Student Info</h1>
        </div>
        <h2 className="pt-5 pb-2">
          Student's Name <span className="text-[#FF4041]">(Required)</span>{" "}
        </h2>
        <div className="md:flex justify-between gap-x-5">
          <div className="w-full">
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              {...register("firstName", { required: { value: true, message: "first name is required" } })}
            />
            <h2 className="my-1">First</h2>
            {errors.firstName?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
          </div>
          <div className="w-full">
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              {...register("lastName", { required: { value: true, message: "last name is required" } })}
            />
            <h2 className="my-1">Last</h2>
            {errors.lastName?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="md:flex justify-between gap-x-5 mt-5">
          <div className="w-full">
            <h2 className="pt-5 pb-2">
              Student's Birthday{" "}
              <span className="text-[#FF4041]">(Required)</span>{" "}
            </h2>

            <input
              className="py-2 bg-gray-100 rounded focus-border w-1/2"
              type="date"
              {...register("birthday", { required: { value: true, message: "date of birthday is required" } })}
            />
            {errors.birthday?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.birthday.message}</p>}
          </div>
          <div className="w-full">
            <h2 className="pt-5 pb-2">
              Student's Current Grade Level{" "}
              <span className="text-[#FF4041]">(Required)</span>{" "}
            </h2>
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              {...register("currentGrade", { required: { value: true, message: "grade is required" } })}
            />
            {errors.currentGrad?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.currentGrade.message}</p>}
          </div>
        </div>
        <div className="md:flex justify-between gap-x-5 mt-5">
          <div className="w-full">
            <h2 className="pt-5 pb-2">
              Gender
            </h2>

            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              {...register("gender", { required: { value: true, message: "gender is required" } })}
            />
            {errors.gender?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.gender.message}</p>}
          </div>
          <div className="w-full">
            <h2 className="pt-5 pb-2">
              Learning Disabilities?
              <span className="text-[#FF4041]">(Required)</span>{" "}
            </h2>
            <div className="block">
              <input
                onChange={() => setIsChecked('yes')}
                checked={isChecked === "yes"}
                type="radio"
                name=""
                id=""
              />
              <br />
              <input
                onChange={() => setIsChecked("no")}
                checked={isChecked === "no"}
                type="radio"
                name=""
                id=""
              />
            </div>
          </div>

        </div>
        <div className="lg:mt-10">

          <button type="submit" className="flex btn bg-zinc-800 px-4 py-1 rounded-full text-white">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionPage;