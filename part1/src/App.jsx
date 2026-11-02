const Header = () => {
  const course = "Half Stack application development";
  return <h1>{course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.description} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part description="Fundamentals of React" exercises={props.exercises1} />
      <Part
        description="Using props to pass data"
        exercises={props.exercises2}
      />
      <Part description="State of a component" exercises={props.exercises3} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header />
      <Content
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
