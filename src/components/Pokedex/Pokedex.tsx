import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import styles from './styles.module.scss';
import { ReactComponent as Cylinder } from '../../assets/cylinder.svg';

const Pokedex = () => (
  <div className={styles.pokedexContainer}>
    <div className={styles.pokedex}>
      <LeftPanel />
      <RightPanel />
      <div className={styles.cylinder}>
        <Cylinder />
      </div>
    </div>
  </div>
);

export default Pokedex;
