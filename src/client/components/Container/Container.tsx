import * as React from 'react'
import './Container.css'

type Props = {
  children: JSX.Element
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <section className='Container'>
      { children }
    </section>
  );
};

export default Container;
