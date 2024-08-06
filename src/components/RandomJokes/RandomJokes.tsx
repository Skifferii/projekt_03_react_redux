
import Button from "../Button/Button";
import { JokeCard, RandomJokesWrapper, JokeText, JokesContainer } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { randomJokesSliceActions, randomJokesSliceSelectors } from "../../store/redux/randomJokes/randomJokesSlice";
import { v4 } from "uuid";
import Spinner from "../Spinner/Spinner";

function RandomJokes() {
  const dispatch = useAppDispatch()
  const {data,status,error} = useAppSelector(randomJokesSliceSelectors.jokeData)

   const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const jokes = data.map((joke: any) => {
    return <JokeText key={v4()}>{`${joke.setup} - ${joke.punchline}`}</JokeText>
  })

  return (
    <RandomJokesWrapper>
      <JokeCard>
        <Button name='Get Joke' onClick={getJoke} />
        <JokesContainer>
          {status===`loading` ? <Spinner/>:jokes}
        </JokesContainer>
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes