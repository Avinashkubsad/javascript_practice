function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("fetching the data");

    setTimeout(() => {
      const success = false;

      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("error, please try again later");
      }
    }, 2000);
  });
}
async function handleData() {
  try {
    const message = await fetchData();
    console.log("Success:", message);
  } catch (err) {
    console.log(err);
  }

  console.log("hi");
}
// Function 1: Log the message to the console
const handleDataLog = async () => {
  try {
    const message = await fetchData();
    console.log("Log Handler - Success:", message);
  } catch (error) {
    console.error("Log Handler - Error:", error);
  }
};

handleData();

// function App() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//       fetchData();
//     });
//     const getData = async () => {
//      const response = await fetch("https://api.github.com/users/hadley/orgs");
//       const jsondata = await response.json();
//       return jsondata;
//     };
//     async function fetchData() {
//       try {
//         const response = await getData();
//         setData(response);
//       } catch (error) {
//         console.log(error);
//       }
//     }
