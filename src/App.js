import Profile from "./profile/Profile";

function App() {
  const handleName = (name) => {
    alert(name);
  };
  return (
    <div className="App">
      <Profile
        fullName="Temiloluwa Praise"
        profession="Full Stack Developer"
        bio="A fullstack developer proficient in a lot of languages and technologies"
        handleName={handleName}
      >
        <h1>Welcome to Temiloluwa!!</h1>
      </Profile>
    </div>
  );
}

export default App;
