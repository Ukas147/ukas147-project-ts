const url = import.meta.env.VITE_API_URL;

export async function deleteDepartment(id: number) {
    const response = await fetch(`${url}/delete-department/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir departamento");
    }

    return response.text();
}