import React, { useState, useRef, useEffect } from "react";

const AutoComplete = ({ options, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex , setHighlightedIndex]= useState()
  const dropdownRef = useRef(null);

  useEffect(() => {
    if(inputValue===""){
      setFilteredOptions(options)
    }
    else{
      setFilteredOptions(options.filter((option)=>option.toString().toLowerCase().includes(inputValue.toLowerCase())))
    }
  }, [inputValue, options]);
  const handleInputValue=(e)=>{
    setInputValue(e.target.value)
  }

  const handleOptionClick = (option, index) => {
    setInputValue(option);
    setHighlightedIndex(index)
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative", width: "250px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        onClick={() => setIsOpen(true)}
        placeholder="Type to search..."
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      
      {isOpen && filteredOptions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option, index)}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor: highlightedIndex === index ? "#dcdcdc" : "fff",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function App() {
  const options = ["Apple", "Banana", "Orange", "Grape", 123, 456];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple AutoComplete</h2>
      <AutoComplete
        options={options}
        onSelect={(value) => alert(`Selected: ${value}`)}
      />
    </div>
  );
}


// import React, { useState, useRef, useEffect } from "react";

// const AutoComplete = ({ options, onSelect }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [highlightedIndex , setHighlightedIndex]= useState()
//   const dropdownRef = useRef(null);

//   useEffect((inputValue) => {
//     if(inputValue===""){
//       setFilteredOptions(options)
//     }
//     else{
//       setFilteredOptions(options.filter((option)=>option.toString().toLowerCase().includes(inputValue.toLowerCase())))
//     }
   

    ``
   
//   }, [inputValue]);
//   const handleInputValue=(e)=>{
//     setInputValue(e.target.value)
//   }

//   const handleOptionClick = (option, index) => {
//     setInputValue(option);
//     setHighlightedIndex(index)
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} style={{ position: "relative", width: "250px" }}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputValue}
//         onClick={() => setIsOpen(true)}
//         placeholder="Type to search..."
//         style={{
//           width: "100%",
//           padding: "10px",
//           boxSizing: "border-box",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//         }}
//       />
      
//       {isOpen && filteredOptions.length > 0 && (
//         <ul
//           style={{
//             listStyle: "none",
//             margin: 0,
//             padding: 0,
//             position: "absolute",
//             top: "100%",
//             left: 0,
//             right: 0,
//             backgroundColor: "white",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             maxHeight: "150px",
//             overflowY: "auto",
//             zIndex: 1000,
//           }}
//         >
//           {filteredOptions.map((option, index) => (
//             <li
//               key={index}
//               onClick={() => handleOptionClick(option, index)}
//               style={{
//                 padding: "10px",
//                 cursor: "pointer",
//                 backgroundColor: highlightedIndex === index ? "#dcdcdc" : "fff",
//               }}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default function App() {
//   const options = ["Apple", "Banana", "Orange", "Grape", 123, 456];

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Simple AutoComplete</h2>
//       <AutoComplete
//         options={options}
//         onSelect={(value) => alert(`Selected: ${value}`)}
//       />
//     </div>
//   );
// }


// const fetchOptions =async(query)=>{
//   if(query.trim() === ""){
//     return []
//   }
// const response = await fetch(`https://openlibrary.org/search/authors.json?q=${query}&limit=10`);
// const data = await response.json()
// return data.docs.map((author)=>author.name)

// }
 
  
// useEffect(() => {
//   // if(inputValue===""){
//   //   setFilteredOptions(options)
//   // }
//   // else{
//   //   setFilteredOptions(options.filter((option)=>option.toString().toLowerCase().includes(inputValue.toLowerCase())))
//   // }
//   const  fetchAndFilter = async() =>{
//     if(inputValue.trim() !==0){
//      const options = await fetchOptions(inputValue)
//       setFilteredOptions(options)
     
//     }
//     else{
//       setFilteredOptions([])
//     }
//   }
//   fetchAndFilter()
// }, [inputValue]);