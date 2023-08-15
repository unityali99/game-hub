import { Button, Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";

interface Props {
  text: string;
  limit: number;
}

function ExpandableText({ text, limit }: Props) {
  const [expanded, setExpanded] = useState(false);

  const isLongText = text.length > limit;
  const slicedText = isLongText ? text.slice(0, limit) : text;

  return (
    <Fragment>
      <Text display={"inline-block"} textAlign={"justify"}>
        {expanded ? text : slicedText}
        {isLongText && !expanded && "..."}
      </Text>
      {isLongText && (
        <Button
          colorScheme="yellow"
          onClick={() => setExpanded((current) => !current)}
          display={"inline-block"}
          px={4}
          my={3}
        >
          {expanded ? "Show Less" : "Show More ..."}
        </Button>
      )}
    </Fragment>
  );
}

export default ExpandableText;
