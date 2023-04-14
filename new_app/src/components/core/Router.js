import { Route, Routes } from "react-router-dom";
import ProductsList from "../../routes/ProductsList/ProductsList";
import ProductDetail from "../../routes/ProductDetail/ProductDetail";
import InfoTextIcon from "../bricks/InfoTextIcon";
import { mdiProgressHelper, mdiEmoticonSadOutline } from "@mdi/js";

function Router() {
  // Define props for in-progress state
  const inProgressProps = {
    text: "Sorry, page is in progress.",
    icon: mdiProgressHelper,
  };
  return (
    <div className="Router">
      <Routes>
        {/* Define route for the cart page */}
        <Route
          path="/cart"
          exact
          element={<InfoTextIcon {...inProgressProps} />}
        />
        {/* Define route for the about page */}
        <Route
          path="/about"
          exact
          element={<InfoTextIcon {...inProgressProps} />}
        />
        {/* Define route for the products list page */}
        <Route path="/products" exact element={<ProductsList />} />
        {/* Define route for a specific product detail page */}
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        {/* Define route for any unknown page */}
        <Route
          path="*"
          element={
            <InfoTextIcon text="Page not found." icon={mdiEmoticonSadOutline} />
          }
        />
      </Routes>
    </div>
  );
}

Router.propTypes = {
  // No props are required for this component
};

export default Router;
