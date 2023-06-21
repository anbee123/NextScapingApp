import { CardContainer, CardImage, ImageContainer, TextPrice, TextTitle } from './style';
import { ProductItemType } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  item: ProductItemType
}

const ProductCard = ({ item }: ProductCardProps) => {
  const noImgUrl = '/img/noimage.jpg'
  const [imgSrc, setImgSrc] = useState(item.imgUrl ? item.imgUrl : noImgUrl);

  return (<CardContainer>
    <ImageContainer href={item.linkUrl}>
      <CardImage
        src={imgSrc}
        onError={() => setImgSrc(noImgUrl)}
        alt=""
      />
    </ImageContainer>
    <TextTitle>{item.title}</TextTitle>
    <TextPrice>{item.price}</TextPrice>
  </CardContainer>
  );
};

export default ProductCard