import "./App.css";

function App() {
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div
        className="userList"
        style={{ boxShadow: "0 0 10px grey", padding: "2rem" }}
      >
        <div className="display">As you are typing</div>
        <div className="form">
          <form action="">
            <input type="text" />
            <button>Add User</button>
          </form>
        </div>
        <hr />
        <div className="list">
          <ul>
            <li>Dinesh</li>
            <li>Sam</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
