import Navbar from "./components/navbar/Navbar";
import { useParams, useLocation } from "react-router-dom";

export default function App() {
  const { id } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const queryId = queryParams.get("id");

  console.log(queryId);
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        Hello {queryId}
      </div>
    </>
  );
}
