import supabase from "./supabase.js";

export async  function login({email, password}) {

	let { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	})
	if (error) throw new Error (error.message)

	return data


}



// serbeniuk.ivan1@gmail.com
// qwerty1234