function SlotMachine(props) {
  const { pic1, pic2, pic3 } = props;
  const isWinner = pic1 === pic2 && pic2 === pic3;

  return (
    <React.Fragment>
      <p>
        {pic1} {pic2} {pic3}
      </p>
      <p>{isWinner ? "You win!" : "You lose!"}</p>
    </React.Fragment>
  );
}

function App(props) {
  return (
    <React.Fragment>
      <h1>Slot Machines!</h1>
      <SlotMachine pic1="🍒" pic2="🍒" pic3="🍊" />
      <SlotMachine pic1="🔔" pic2="🔔" pic3="🔔" />
      <SlotMachine pic1="🍒" pic2="🍊" pic3="🔔" />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
