import { useState, useEffect, useRef } from "react";
import { Card, Col, Row } from 'antd';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
};

export default function Infinite() {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const elementRef = useRef<HTMLDivElement | null>(null);
  
  function onIntersection(entries: IntersectionObserverEntry[]) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [products]);

  async function fetchMoreItems() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10}`
    );
    const data = await response.json();
    if (data.products.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        {products.map((item) => (
          <Col key={item.id} span={8}>
            <Card bordered={true} style={{ width: 300 }} cover={<img src={item.thumbnail} alt={item.title} />}>
              {item.title}
            </Card>
          </Col>
        ))}
      </Row>
      {hasMore && (
        <div ref={elementRef} style={{ textAlign: "center", marginTop: "20px" }}>
          Load More Items
        </div>
      )}
      {!hasMore && (
        <div ref={elementRef} style={{ textAlign: "center", marginTop: "20px" }}>
          No more items
        </div>
      )}
    </>
  );
}
