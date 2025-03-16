const url = import.meta.env.VITE_API_URL;

export async function deleteUser(id: string) {
    const response = await fetch(`${url}/delete-user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir usuário");
    }

    return response.text();
}