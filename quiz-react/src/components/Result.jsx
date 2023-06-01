import React, { useEffect, useState } from "react";
import useStateContext from "../hooks/useStateContext";
import { ENDPOINTS, createAPIEndpoint } from "./api";
import {
  Card,
  Box,
  CardContent,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { getFormatedTime } from "./helper";
import { useNavigate } from "react-router-dom";
import Answer from "./Answer";
const Result = () => {
  const { context, setContext } = useStateContext();
  const [score, setScore] = useState();
  const [answers, setAnswers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ids = context.selectedOptions.map((x) => x.qnId);
    createAPIEndpoint(ENDPOINTS.getAnswers)
      .post(ids)
      .then((res) => {
        const data = context.selectedOptions.map((x) => ({
          ...x,
          ...res.data.find((y) => y.qnId == x.qnId),
        }));
        setAnswers(data);
        calculateScore(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateScore = (data) => {
    let tempScore = data.reduce((acc, curr) => {
      return curr.answer == curr.selected ? acc + 1 : acc;
    }, 0);
    setScore(tempScore);
  };
  const onClickRestart = () => {
    setContext({
      timeTaken: 0,
      selectedOptions: [],
    });
    navigate("/quiz");
  };
  const onClickSubmit = () => {
    createAPIEndpoint(ENDPOINTS.participant)
      .put(context.participantId, {
        participantId: context.participantId,
        score: score,
        timeTaken: context.timeTaken,
      })
      .then((res) => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card
        sx={{
          mt: 5,
          display: "flex",
          width: "100%",
          maxWidth: 640,
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <CardContent sx={{ flex: "1 0 auto", textAlign: "center" }}>
            <Typography variant="h4">Congradulations!</Typography>
            <Typography variant="h6">Your Score</Typography>
            <Typography variant="h5" sx={{ fontweight: 600 }}>
              <Typography variant="span">{score}</Typography>/5
            </Typography>
            <Typography variant="h6">
              Took {getFormatedTime(context.timeTaken) + "mins"}
            </Typography>
            <Button
              variant="contained"
              sx={{ mx: 1 }}
              size="small"
              onClick={onClickSubmit}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              sx={{ mx: 1 }}
              size="small"
              onClick={onClickRestart}
            >
              Restart
            </Button>
            <Alert
              severity="success"
              variant="string"
              sx={{
                width: "60%",
                m: "auto",
                visibility: showAlert ? "visible" : "hidden",
              }}
            >
              Score Updated
            </Alert>
          </CardContent>
        </Box>
      </Card>
      <Answer answers={answers} />
    </>
  );
};

export default Result;
