// AddPetForm.js
import { useState } from "react";
import { useForm } from "react-hook-form";

type AddPetFormProps = {
  onSubmit: (data: any) => void;
};

const AddPetForm = ({ onSubmit }: AddPetFormProps) => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data: any) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input {...register("name")} />
      <input {...register("breed")} />
      <textarea {...register("description")} />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPetForm;
