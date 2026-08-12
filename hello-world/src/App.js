import React, { useEffect, useState } from "react";
import './App.css'
import Counter from './Counter';
import InputDisplay from "./InputDisplay";

const CardWrapper = (props) => {
  const cardStyle = {
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#ffffff",
    maxWidth: "500px",
    margin: "40px auto",
    fontFamily: "system-ui, sans-serif"
  };

  return (
    <div style={cardStyle}>
      {props.children}
    </div>
  );
};

const Wrapper = (props) => {
  return (
    <div style={{border:"1px solid black" , borderRadius:"16px" ,  padding:"20px"}}>
      {props.children}
    </div>
  );
};

const ErrorMsg = (props) => {
  const style = {
    padding: '16px',
    borderRadius: '6px',
    borderLeft: '5px solid',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontFamily: 'sans-serif',
    backgroundColor: props.status === 'error' ? '#FEE2E2' : '#EFF6FF',
    color: props.status === 'error' ? '#991B1B' : '#1E40AF'
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

const Welcome = (props) => {
  return <div>{props.children}</div>;
};

function App() {
  const message = "hello!, my name is Aqeel";
  const name = "John Wick";
  const greeting = <h1>Welcome back, {name}!</h1>;

  const element = (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sDLjQJRy-_0YoCv7TP3qZ2VDv76S23wywnfjJ7h5zPnzGM4-nBzIo6yE&s=10"
      alt="image of a cat"
    />
  );

  const fullname = "Aqeel";
  const age = "23";
  const university = "University of Jaffna";

  const Cpp = () => {
    return (
      <Welcome>
        <h1>hello world</h1>
        <p>Welcome to react</p>
      </Welcome>
    );
  };

  // hooks must be at the top level, not after a return
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString()); // fixed: Date() with parens
    }, 1000);
    return () => clearInterval(interval);
  }, []); // add empty dependency array so this runs once, not on every render

  return (
    <div>
      <Wrapper><h1>{message}</h1></Wrapper>
      <p>this is a paragraph</p>
      <h2 id="message">{greeting}</h2>
      <p>{element}</p>
      <p id="myself">
        my name is {fullname}.
        I am {age} years old.
        I am studying in {university}.
      </p>
      <Cpp />
      <ErrorMsg status="error">Something went wrong!</ErrorMsg>
      <ErrorMsg status="alright">Every thing is alright! don't worry</ErrorMsg>

      <h1>Welcome to changing states in ReactJS</h1>
      <h2>{currentTime}</h2>

      <Counter />
      <InputDisplay/>
    </div>
  );

}

export default App;
