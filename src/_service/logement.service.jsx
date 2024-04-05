import ListeLogements from "@/assets/Data/logements.json";

const GetAllLogement = () => {
    return ListeLogements;
}

const GetOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id)

    return OneLogement
}

export const LogementService = {
    GetAllLogement, GetOneLogement
}

export default LogementService