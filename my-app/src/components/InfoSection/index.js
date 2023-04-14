import React from 'react'
import { Column1, Column2, ImgWrap,InfoContainer,InfoRow,InfoWrapper,TextWrapper,TopLine,Heading,Subtitle,Img } from './InfoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    headline,
    darkText,
    description,
    img,
    alt,
    lightText

}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id} >
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
            <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading lightText={lightText}>
                        {headline}
                    </Heading>
                    <Subtitle darkText={darkText}>
                       {description}
                    </Subtitle>

                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
