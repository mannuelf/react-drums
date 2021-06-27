const Header = () => {
  const logo = `https://res.cloudinary.com/mannuel/image/upload/v1594123808/images/maschinelogo.svg`;
  return (
    <>
      <header className='app-header'>
        <div className='column'>
          <img src={logo} className='logo' alt='MASCHINE Micro' />
        </div>
        <div className='column'>
          <div className='app-header-lcd'>
            <h1>
              MACHINE Micro v.1
              <div>808 Drums</div>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
