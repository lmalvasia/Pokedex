import React from 'react';
import classNames from 'classnames';
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import styles from './styles.module.scss';

const CircleContainer = () => (
  <div className={styles.circleContainer}>
    <div className={styles.bigCircle}>
      <div className={styles.light} />
    </div>
    <div className={styles.smallCirclesContainer}>
      <div className={classNames(styles.smallCircle, styles.redCircle)}>
        <div className={classNames(styles.lightSmallCircle, styles.redCircleAnimation)} />
      </div>
      <div className={classNames(styles.smallCircle, styles.yellowCircle)}>
        <div className={classNames(styles.lightSmallCircle, styles.yellowCircleAnimation)} />
      </div>
      <div className={classNames(styles.smallCircle, styles.greenCircle)}>
        <div className={classNames(styles.lightSmallCircle, styles.greenCircleAnimation)} />
      </div>
    </div>
  </div>
);

const ScreenContainer = () => (
  <div className={styles.screenContainer}>
    <div className={styles.screenBorder}>
      <div className={styles.screenCirclesContainer}>
        <div className={styles.screenCircle} />
        <div className={styles.screenCircle} />
      </div>
      <div className={styles.screen}>
        Render information
      </div>
      <div className={classNames(styles.screenCirclesContainer, styles.bottomCirclesContainer)}>
        <div className={styles.selectCircle}>SELECT</div>
        <MenuIcon />
      </div>
    </div>
  </div>
);

const SelectorContainer = () => (
  <div className={styles.nameContainer}>
    <div className={styles.algo}>
      <div className={styles.nameInput}>
        PokemonName
      </div>
      <div className={styles.arrowsContainer}>
        <div className={styles.cross}>
          <div className={styles.leftCross}>
            <div className={styles.left} />
          </div>
          <div className={styles.topCross}>
            <div className={styles.up} />
          </div>
          <div className={styles.rightCross}>
            <div className={styles.right} />
          </div>
          <div className={styles.midCross}>
            <div className={styles.midCircle} />
          </div>
          <div className={styles.bottomCross}>
            <div className={styles.down} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LeftPanel = () => (
  <div className={styles.leftPanelContainer}>
    <CircleContainer />
    <ScreenContainer />
    <SelectorContainer />
  </div>
);

export default LeftPanel;
