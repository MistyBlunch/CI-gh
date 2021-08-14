import './App.css';

function App() {
  let user = {
    name: 'Grace',
    lastname: 'Alvarado',
    nick: 'MistyBlunch',
  };

  return (
    <section className='App cardWrapper'>
      <div className='container cardCtn'>
        <a href='https://github.com/MistyBlunch' className='cardLink'>
          <div className='card'>
            <img
              src='https://image.flaticon.com/icons/png/512/25/25231.png'
              alt='github logo'
            />
            <h4>
              {user.name} {user.lastname}
            </h4>
            <p>{user.nick}</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default App;
