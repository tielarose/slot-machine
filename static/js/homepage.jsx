function SlotMachine(props) {
  const { pic1, pic2, pic3 } = props;
  let msg;

  if (new Set([pic1, pic2, pic3]).size === 1) {
    msg = "You win!";
  } else {
    msg = "You lose!";
  }
  return (
    <React.Fragment>
      <p>
        {pic1} {pic2} {pic3}
      </p>
      <p>{msg}</p>
    </React.Fragment>
  );
}

function App(props) {
  return (
    <React.Fragment>
      <h1>Slot Machines!</h1>
      <SlotMachine pic1="X" pic2="Y" pic3="X" />
      <SlotMachine pic1="Z" pic2="Z" pic3="Z" />
      <SlotMachine pic1="Y" pic2="X" pic3="Z" />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
