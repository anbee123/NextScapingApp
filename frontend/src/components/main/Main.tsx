import { useCallback, useEffect, useState } from "react";
import { SearchBox } from "../search-box";
import { Container, Content, SearchResult } from "./style";
import { ProductItemType } from "@/types";
import { ProductCard } from "../product-card";
import { mockData } from "@/constants/constants";

const Main = () => {

  const [isLoading, setIsLoading] = useState(false)
  const maxShowCount = 9
  const [productList, setProductList] = useState<ProductItemType[]>([])

  const fetchList = async (searchQuery: string) => {
    setProductList(mockData)
  }

  const onSearch = async (searchQuery: string) => {
    setIsLoading(true)
    await fetchList(searchQuery)
    setIsLoading(false)
  }

  return (<Container>
    <Content>
      <SearchBox onSearch={onSearch} />

      {isLoading ? (
        <>Loading</>
      ) : (
        productList && productList.length > 0 && (
          <SearchResult>
            {productList.slice(0, maxShowCount).map((item, index) => <ProductCard key={index} item={item} />
            )}
          </SearchResult>
        )
      )}

    </Content>
  </Container>
  );
};

export default Main
