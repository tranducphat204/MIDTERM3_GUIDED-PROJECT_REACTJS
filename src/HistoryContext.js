import React, { createContext, useState } from "react";

const HistoryContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <HistoryContext.Provider value={{ text, setText, users, setUsers }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
