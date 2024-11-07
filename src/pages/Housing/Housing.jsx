import { useParams } from "react-router-dom";

function Housing() {
  const { id } = useParams();
  console.log(useParams());
  return <main>housing</main>;
}

export default Housing;
