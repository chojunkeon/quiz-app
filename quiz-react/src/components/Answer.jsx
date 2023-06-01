import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { red, green } from "@mui/material/colors";

const Answer = ({ answers }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const markCorrectOrNot = (qna, idx) => ({
    sx: {
      color: [qna.answer, qna.selected].includes(idx)
        ? qna.answer === idx
          ? green[500]
          : red[500]
        : undefined,
    },
  });

  return (
    <Box mt={5} width="100%" maxWidth={640} mx="auto">
      {answers.map((item, j) => (
        <Accordion key={j} expanded={expanded === j} onChange={handleChange(j)}>
          <AccordionSummary>
            <Typography sx={{ width: "90%", flexShrink: 0 }}>
              {item.qnInWords}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {item.options.map((x, i) => (
                <ListItem key={i}>
                  <Typography {...markCorrectOrNot(item, i)}>
                    <b>{String.fromCharCode(65 + i) + ". "}</b>
                    {x}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Answer;
