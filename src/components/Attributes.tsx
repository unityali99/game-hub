import { Fragment } from "react";
import { Game } from "../models/Game";
import List from "./List";
import { ListItem } from "@chakra-ui/react";
import ScoreBadge from "./ScoreBadge";

interface Props {
  game: Game;
}

function Attributes({ game }: Props) {
  return (
    <Fragment>
      <List title={"Platforms"}>
        {game.parent_platforms.map(({ platform }, index) => (
          <ListItem key={index}>{platform.name}</ListItem>
        ))}
      </List>

      <List title={"Publishers"}>
        {game.publishers.map((publisher, index) => (
          <ListItem key={index}>{publisher.name}</ListItem>
        ))}
      </List>

      <List title={"Genres"}>
        {game.genres.map((genre, index) => (
          <ListItem key={index}>{genre.name}</ListItem>
        ))}
      </List>

      <List title={"Score"}>
        <ScoreBadge score={game.metacritic} />
      </List>
    </Fragment>
  );
}

export default Attributes;
