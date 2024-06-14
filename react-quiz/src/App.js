import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Question from "./Question";
import NextButton from "./NextButton"
import Progress from "./Progress";
import FinishedScreen from "./finishedScreen";
import Footer from "./Footer";

import Timer from "./Timer";

const SECS_PER_QUESTIONS = 30; 
// initial state
const initialState = {
  questions: [], 
  status: "loading", 
  index:0 , 
  answer: null,
  points:0,
  highScore:0,
  secondsRemainding: null, 
};

function reducer(state, action) {

  switch(action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: "ready"};
    case "dataFailed": return {...state, status: "error"};
    case 'start':
      return { ...state, status:"active", 
    secondsRemainding: state.questions.length * SECS_PER_QUESTIONS,};
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {...state, answer: action.payload, points: action.payload === question.correctOption ? state.points + question.points: state.points};
    case 'nextQuestion': 
      return {...state, index:state.index + 1, answer:null};

    case 'finish' :
      return {...state,status:'finished', highScore: state.points > state.highScore ? state.points : state.highScore};

    case 'restart':
      return {...initialState, questions: state.questions, status:"ready", };

    case 'tick':
      return {  
        ...state,secondsRemainding:state.secondsRemainding - 1, status:state.secondsRemainding === 0 ? 'finished' : state.status};

    default:
      throw new Error("action unknown")

  }
}

export default function App() {

const [{questions, status, index, answer, points, highScore, secondsRemainding}, dispatch] = useReducer(reducer, initialState);

const numQuestions = questions.length;
const maxPossiblePoints = questions.reduce(
  (prev, cur) => prev + cur.points, 0
);

useEffect(function() {
  fetch('http://localhost:8000/questions').then((res) => res.json()).then((data) => dispatch({type:"dataReceived", payload: data}))
  .catch((err) => dispatch({type: "dataFailed"}));
}, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions ={numQuestions}  dispatch={dispatch}/>}

        {status === 'active' && (
          <>
        <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
        <Question 
        question={questions[index]} 
        dispatch={dispatch} 
        answer={answer}
        /> 
        <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index}/>
        <Footer>
          <Timer dispatch={dispatch} secondsRemainding={secondsRemainding} />
          <NextButton 
            dispatch={dispatch}
            answer={answer}
            numQuestions={numQuestions}
            index={index}
          />
        </Footer>
        </>
 

        )}

        {status === 'finished' && <FinishedScreen
         points={points} 
         maxPossiblePoints={maxPossiblePoints} 
         highScore={highScore} 
         dispatch={dispatch}
         />}

      </Main>
    </div>
  )

}