import { createRoot } from 'react-dom/client';
import './tailwind.css'
import ResponsiveDesign from './ResponsiveDesign';
// import FrameworkList from './frameworklist';
import FrameworkListSearchFilter from './FrameworkListSearchFilter';
import Test from './test';
import ProductList from './ProductList';
import ProductSearch from './ProuctSearch';
createRoot(document.getElementById("root")).render(
  <div>
     {/* <FrameworkList></FrameworkList> */}
    {/* <FrameworkListSearchFilter></FrameworkListSearchFilter> */}
   {/* <Test></Test> */}
   {/* <ResponsiveDesign></ResponsiveDesign> */}
   <ProductList></ProductList>
   {/* <ProductSearch></ProductSearch> */}
  </div>
)
