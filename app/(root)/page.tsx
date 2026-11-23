import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export default async function Homepage() {

  return (
      <>
        <ProductList data={sampleData.products} title={"Newest Arrivals"} limit={5} />
      </>
  );
}