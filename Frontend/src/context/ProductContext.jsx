import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const contextValue = {
        allProducts,
        setAllProducts,
        categories, 
        setCategories
    }
    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;