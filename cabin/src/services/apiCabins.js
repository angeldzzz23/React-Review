import supabase,{supabaseUrl} from "./supabase";

export async function getCabins() {
    const {data, error } = await supabase.from('Cabins').select('*');

    if (error) {
        console.error(error);
        throw new Error('Cabins could not be loaded');
    } 
    return data;
}


export async function createCabin(newCabin) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/", 
        ""
    );
    
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // create cabin
    const { data, error } = await supabase
    .from('Cabins')
    .insert([{...newCabin,image: imagePath}]);

    if (error) {
        console.error(error);
        throw new Error("cabin could not be Created");
    }

    // upload the image
    const {error:storageError} = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

    // delete
    if (storageError) {
        await supabase.from('Cabins').delete().eq("id", data.id);
        console.error(storageError);
        throw new Error("cabin could not be deleted and n");

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

