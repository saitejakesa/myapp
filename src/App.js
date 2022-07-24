import Card1Display from "./Card1Display";
import Card2display from "./Card2display";
import Card3Display from "./Card3Display";


const App = () => {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card1Display></Card1Display>
          <Card2display></Card2display>
          <Card3Display></Card3Display>
        </div>
      </div>
    </section>
  );
};

export default App;
  