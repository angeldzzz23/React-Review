import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";
// import { useFormAction } from "react-router-dom";

function CreateCabinForm({cabinToEdit = {}}) {

  const {id: editId, ...editValues} = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {register, handleSubmit, reset, getValues, formState} = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const {errors} = formState;

  const queryClient = useQueryClient();

  const {mutate:createCabin, isLoading:isCreating } = 
  useMutation({
    mutationFn: createEditCabin, 
    onSuccess: () => {
      toast.success("new cabin successfully created");
      queryClient.invalidateQueries({queryKey:["cabins"]});
      reset();
    },
  });

  const {mutate:editCabin, isLoading:isEditing } = 
  useMutation({
    mutationFn: ({newCabinData,id}) => 
    createEditCabin(newCabinData, id), 
    onSuccess: () => {
      toast.success("cabin has been edited");
      queryClient.invalidateQueries({queryKey:["cabins"]});
      reset();
    },
  });

  const isWorking = isCreating || isEditing;


  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession) {
      editCabin({newCabinData: {...data, image}, id:editId})
    } else {
      mutate({...data, image: data.image[0]});
    }

   
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      
      <FormRow label='Cabin Name' error={errors?.name?.message}>
        <Input 
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required:"this field is required",
          })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input type="number" 
        id="maxCapacity" 
        disabled={isWorking}
        {...register("maxCapacity",{
          required:"this field is required",
          min: {
            value: 1, 
            message: 'capacity should be at least 1',
          }
        })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
      <Input type="number" 
       id="regularPrice" 
       disabled={isWorking}
       {...register("regularPrice",{
          required:"this field is required",
          min: {
            value: 1, 
            message: 'capacity should be at least 1',
          }
        })} />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
      <Input type="number"
       id="discount" 
       disabled={isWorking}
       defaultValue={0} {...register("discount",{
          required:"this field is required",
        })}  />
      </FormRow>

      <FormRow label='description' error={errors?.description?.message}>
      <Textarea type="number" id="description" defaultValue="" {...register("description",{
          required:"this field is required",
        })} />
      </FormRow>



      <FormRow label="Cabin Photo">
        <FileInput 
        id="image" 
        accept="image/*" 
        {...register("image", {
          required: isEditSession ?  false : "this field is required",
        })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit Cabin' : 'Create Cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
