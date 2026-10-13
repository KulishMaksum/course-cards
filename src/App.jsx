import CourseCard from "./CourseCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Навчальні курси</h1>

      <div className="courses">
        <CourseCard
          title="React"
          teacher="Іван Петренко"
          duration="8 тижнів"
          available={true}
        />

        <CourseCard
          title="JavaScript"
          teacher="Олена Коваль"
          duration="6 тижнів"
          available={true}
        />

        <CourseCard
          title="HTML і CSS"
          teacher="Андрій Мельник"
          duration="4 тижні"
          available={false}
        />
      </div>
    </div>
  );
}

export default App;
