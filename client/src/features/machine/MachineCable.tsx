import styled from 'styled-components';

const MachineCable = (): JSX.Element => {
  return (
    <>
      <CordBase>
        {' '}
        <Cord />
      </CordBase>
    </>
  );
};

const Cord = styled.div`
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23616161' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  width: 15px;
  height: 120px;
  position: absolute;
  top: -120px;
  left: 8px;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
`;

const CordBase = styled.div`
  background-color: #2b2a2a;
  width: 30px;
  height: 20px;
  position: absolute;
  top: -23px;
  left: 20px;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.6);
  border-radius: 3px 3px 0 0;
  border-bottom: 2px solid #000;
`;

export default MachineCable;
