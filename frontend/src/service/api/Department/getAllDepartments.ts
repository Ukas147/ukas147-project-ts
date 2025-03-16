const url = import.meta.env.VITE_API_URL;

export async function getAllDepartments() {
	const response = await fetch(`${url}/get-all-departments`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error("Erro ao buscar departamentos");
	}

	return response.json();
}
