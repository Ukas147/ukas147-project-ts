const url = import.meta.env.VITE_API_URL;

export async function getAllUsers() {
    const response = await fetch(`${url}/get-all-users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
    }

    return response.json();
}
