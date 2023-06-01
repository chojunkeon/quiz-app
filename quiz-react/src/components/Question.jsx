import React, { useEffect, useState } from "react";
import { ENDPOINTS, createAPIEndpoint } from "./api";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItemButton,
  CardHeader,
  LinearProgress,
} from "@mui/material";
import useStateContext from "../hooks/useStateContext";
import { useNavigate } from "react-router-dom";
import {getFormatedTime} from "./helper"

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [qnIndex, setQnIndex] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const { context, setContext } = useStateContext();
  const navigate = useNavigate();
  let timer = 0;
  const startTimer = () => {
    timer = setInterval(() => {
      setTimeTaken((prev) => prev + 1);
    }, [1000]);
  };

  const updateAnswer = (qnId, optionIdx) => {
    const temp = [...context.selectedOptions];
    temp.push({
      qnId,
      selected: optionIdx,
    });

    if (qnIndex < 4) {
      setContext({ selectedOptions: [...temp] });
      setQnIndex(qnIndex + 1);
    } else {
      setContext({ selectedOptions: [...temp], timeTaken });
      navigate('/result')
    }
  };

  const handleListItemButtonClick = (qnId, optionIdx) => {
    updateAnswer(qnId, optionIdx);
  };

  useEffect(() => {
    setContext({
      timeTaken: 0,
      selectedOptions : []
    })
    createAPIEndpoint(ENDPOINTS.question)
      .fetch()
      .then((res) => {
        setQuestions(res.data);
        startTimer();
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {questions.length > 0 ? (
        <Card sx={{ maxWidth: 650, mx: "auto", mt: 5 }}>
          <CardHeader
            title={"Question " + (qnIndex + 1) + " of 5"}
            action={<Typography>{getFormatedTime(timeTaken)}</Typography>}
          />
          <Box>
            <LinearProgress
              variant="determinate"
              value={((qnIndex + 1) * 100) / 5}
            />
          </Box>
          <CardContent>
            <Typography variant="h6">{questions[qnIndex].qnInWords}</Typography>
            <List>
              {questions[qnIndex].options.map((item, idx) => {
                const optionClickHandler = () =>
                  handleListItemButtonClick(questions[qnIndex].qnId, idx);

                return (
                  <ListItemButton key={idx} onClick={optionClickHandler}>
                    <div>
                      <b>{String.fromCharCode(65 + idx) + "."}</b> {item}
                    </div>
                  </ListItemButton>
                );
              })}
            </List>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};

export default Question;
