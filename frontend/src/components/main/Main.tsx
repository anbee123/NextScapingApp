import { useState } from "react";
import { SearchBox } from "../search-box";
import { Container, Layout, SearchContainer, SearchResult, TextMessage } from "./style";
import { DataResponseType, ProductItemType } from "@/types";
import { ProductCard } from "../product-card";
import { BaseAPI } from "@/constants/constants";

const Main = () => {

  const [isLoading, setIsLoading] = useState(false)
  const maxShowCount = 9
  const [productList, setProductList] = useState<ProductItemType[]>([])
  const [message, setMessage] = useState<string>('No items')

  const fetchList = async (searchQuery: string) => {
    const response: DataResponseType = await fetch(BaseAPI, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery })
    })
      .then(res => res.json()).then(data => data as DataResponseType)
      .catch(err => ({ error: true, errorMessage: 'Failed' }))

    if (response.error) {
      setMessage(response?.errorMessage ?? '')
    }
    setProductList(response.items ?? [])
  }

  const onSearch = async (searchQuery: string) => {
    setIsLoading(true)
    await fetchList(searchQuery)
    setIsLoading(false)
  }

  return (<Layout>
    <Container>
      <SearchContainer>
        <SearchBox onSearch={onSearch} isLoading={isLoading} />
      </SearchContainer>
      <SearchResult>
        {isLoading ? (
          <TextMessage>Loading</TextMessage>
        ) :
          (productList && productList.length > 0) ?
            productList.slice(0, maxShowCount).map((item, index) => <ProductCard key={index} item={item} />)
            :
            <TextMessage>{message}</TextMessage>

        }
      </SearchResult>
    </Container>
  </Layout>
  );
};

export default Main
