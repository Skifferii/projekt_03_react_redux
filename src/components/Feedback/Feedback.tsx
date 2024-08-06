import Button from "../Button/Button"
import LikeImg from '../../assets/like.png'
import DislikeImg from '../../assets/dislike.png'
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { feedbackSliceActions, feedbackSliceSelectors } from "../../store/redux/feedback/feedbackSlice"

import {
  FeedbackWrapper,
  Count,
  ImageContainer,
  Image,
  ImagesResultsWrapper
} from "./styles"

function Feedback() {
  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const dispatch = useAppDispatch();

  const addLike = () => { 
    dispatch(feedbackSliceActions.addLike(5))
  }

  const addDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <FeedbackWrapper>
      <ImagesResultsWrapper>
        <Count>{like}</Count>
        <ImageContainer>
          <Image src={LikeImg} alt='like' onClick={addLike} />
        </ImageContainer>
        <ImageContainer>
          <Image src={DislikeImg} alt='dislike' onClick={addDislike} />
        </ImageContainer>
        <Count>{dislike}</Count>
      </ImagesResultsWrapper>
      <Button name='Reset results' onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
