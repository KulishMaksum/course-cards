function CourseCard({ title, teacher, duration, available }) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Викладач: {teacher}</p>
      <p>Тривалість: {duration}</p>
      <p>Запис: {available ? "Відкрито" : "Закрито"}</p>
    </div>
  );
}

export default CourseCard;

