import version from '../../../package.json';
import { LOGO } from '../../constants';

const MachineHeader: React.FC = (): JSX.Element => {
  return (
    <>
      <header className='app-header'>
        <div className='column'>
          <img src={LOGO} className='logo' alt='MASCHINE Micro' />
        </div>
        <div className='column'>
          <div className='app-header-lcd'>
            <h1>
              Micro v.{version?.version}
              <div>808 Drums</div>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default MachineHeader;
