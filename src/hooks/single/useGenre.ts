import useGenres from "../list/useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((platform) => platform.id === id);
};

export default useGenre;
