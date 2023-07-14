import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
}
