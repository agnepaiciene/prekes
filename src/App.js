// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./components/products";
import productsData from "./data/productsdata";
import Teacher from "./components/teachers";
import teachersData from "./data/teachersdata";

function App() {
  const curse = productsData;
  const teachers = teachersData;

  const list1 = [];
  for (let i = 0; i < curse.length; i++) {
    list1.push(<Product products={curse[i]}></Product>);
  }

  const list2 = [];
  for (let i = 0; i < teachers.length; i++) {
    list2.push(<Teacher teachers={teachers[i]}></Teacher>);
  }

  return (
    <div className="container">
      <h1 class="display-5 text-center">Programavimo kursai</h1>

      <div className="row text-center mt-5">
        {list1};
      </div>

      <div className="bg-secondary bg-opacity-50 text-emphasis-secondary">
        <h1 class="display-6 text-start mt-3 text-emphasis-secondary p-2 ms-4 mt-2 mb-1">
          Mūsų dėstytojai
        </h1>

        <hr></hr>

        <div class="col-11 row px-4 d-flex justify-content-between flex-wrap mx-auto gap-3">
          {list2}
        </div>
      </div>
    </div>
  );
}

export default App;
