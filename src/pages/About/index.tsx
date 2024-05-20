import DynamicPagination from "../../components/DynamicPagination";

const About = () => {
  return (
    <div>
      Это проект клиентской оболочки над серверным приложением для автосервиса.<br></br>Выполнил Луговских Данил
      <br></br>
      Ниже представлен список всех существующих вузов
      <DynamicPagination></DynamicPagination>
    </div>
  );
};

export default About;
