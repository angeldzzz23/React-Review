import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSettings() {
    const queryClient = useQueryClient();

    const {mutate:updateSetting, isLoading:isUpdating } = 
    useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings has been edited");
      queryClient.invalidateQueries({queryKey:["settings"]});
    },
  });


  return {isUpdating, updateSetting};
}