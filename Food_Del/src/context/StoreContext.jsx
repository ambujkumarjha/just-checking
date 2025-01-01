import { createContext } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets";

// Create a new Context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Ensure food_list is handled as part of context value
  const contextValue = {
    food_list, // Only used as part of context, not rendered
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {/* Render children properly */}
      {props.}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
