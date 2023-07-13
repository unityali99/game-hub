import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((value) => (
        <li>{value.name}</li>
      ))}
    </ul>
  );
}
