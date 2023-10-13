import { Image, ImageProps } from "@chakra-ui/react"
import thumbsUp from "../assets/thumbs-up.png"
import meh from "../assets/thumbs-up.png"
import bullsEye from "../assets/thumbs-up.png"

interface Props {
  rationg_top: number
}

const Emoji = ({rationg_top}: Props) => {
  if (rationg_top < 3) return null
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  }

  return (
    <Image {...emojiMap[rationg_top]} marginTop={1}/>
  )
}

export default Emoji