import { createContext } from "react";

export const ShopContext = createContext();
//  You store products once in ShopContext.

// Now any component can directly do:

// useContext(ShopContext)


// No prop passing needed.

// Cleaner.
// Scalable.
// Maintainable.