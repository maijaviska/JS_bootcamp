function App() {
  return (
    <div className="container" style={{backgroundColor: "#464646"}}>
      <div className="row">
        <div className="col-md-3 offset-md-5 text-start text-white" style={{height: "600px"}}>
          <h1>Todo App</h1>
          <span>Complete 0/0</span>
          <h5>Enter a new task</h5>
          <form className="d-flex">
            <input className="form-control me-2" type="text"/>
            <button class="btn btn-primary" type="submit">+</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
