import { POKEMON_COLORS } from "./constans";

const getColorByPokemonType = (type) => POKEMON_COLORS[type.toLowerCase()];

export default getColorByPokemonType;