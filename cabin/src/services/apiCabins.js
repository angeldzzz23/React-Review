import supabase from "./supabase";

export async function getCabins() {
    const {data, error } = await supabase.from('Cabins').select('*');

    if (error) {
        console.error(error);
        throw new Error('Cabins could not be loaded');
    } 
    return data;
}


export async function createCabin(newCabin) {
    const { data, error } = await supabase
    .from('Cabins')
    .insert([newCabin]);

    if (error) {
        console.error(error);
        throw new Error("cabin could not be Created");
    }
    
    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase
    .from('Cabins')
    .delete()
    .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("cabin could not be deleted");
    }
    
    return data;
}

