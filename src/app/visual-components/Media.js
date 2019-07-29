// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import Img from 'react-image';
import { InView } from 'react-intersection-observer';
import Color, { COLOR_SHADES } from './Color';

import { Checkbox } from './Form';
import Space, { Row } from './Grid';
import Icon, { ICON_SIZES } from './Icons';
import { LoadingSpin, LoadingUpload } from './Loading';

import styles from './media.css';
import Text, { TEXT_SIZE } from './Text';
import Tooltip from './Tooltip';

type ImageProps = {
  src: string,
  alt: string,
  onClick?: Function | null,
  tumpStyle?: boolean,
  smallStyle?: boolean,
  isLoading?: boolean,
  isMiniLoading?: boolean,
  selected?: boolean,
  className?: string,
  showCheckbox?: boolean,
  onChangeValue?: Function,
  showErrorIcon?: boolean,
};

Image.defaultProps = {
  tumpStyle: true,
  smallStyle: false,
  onClick: null,
  isLoading: false,
  isMiniLoading: false,
  selected: false,
  className: '',
  showCheckbox: false,
  onChangeValue: () => {},
  showErrorIcon: false,
};

type PlaceholderImageProps = {
  classes: string,
  imageClasses: string,
};

function PlaceholderImage(props: PlaceholderImageProps) {
  const { classes, imageClasses } = props;
  return (
    <div className={classes}>
      <div className={imageClasses} />
    </div>
  );
}

export default function Image(props: ImageProps) {
  const {
    alt,
    onClick,
    tumpStyle,
    smallStyle,
    isLoading,
    isMiniLoading,
    selected,
    className,
    showCheckbox,
    onChangeValue,
    showErrorIcon,
    ...elementProps
  } = props;
  const classes = ClassNames(styles['image-wrapper'], {
    [styles['image-wrapper--full-screen']]: !tumpStyle,
  });

  const imageClasses = ClassNames(styles.image, className, {
    [styles['image--style-tump']]: tumpStyle,
    [styles['image--style-small']]: smallStyle,
    [styles['image--style-full-screen']]: !tumpStyle,
  });
  const buttonClasses = ClassNames(styles['image-wrapper__button'], {
    [styles['image-wrapper__button--clickable']]: !!onClick,
  });

  const placeHolderImage = (
    <PlaceholderImage imageClasses={imageClasses} classes={classes} />
  );

  return (
    <InView>
      {({ inView, ref }) =>
        inView || false ? (
          <div className={classes}>
            <button className={buttonClasses} onClick={onClick} ref={ref}>
              {isLoading ? (
                placeHolderImage
              ) : (
                <Img
                  alt={alt}
                  title={alt}
                  {...elementProps}
                  loader={placeHolderImage}
                  className={imageClasses}
                  unloader={
                    <div className={imageClasses}>
                      <Space>
                        <Text muted>Oops... cant find!</Text>
                      </Space>
                    </div>
                  }
                />
              )}
              {isMiniLoading && (
                <div className={styles['image__mini-loader']}>
                  <LoadingUpload />
                </div>
              )}
              {showErrorIcon && (
                <div className={styles['image__error-icon']}>
                  <Tooltip message="Failed to process">
                    <Color shade={COLOR_SHADES.DANGER}>
                      <Icon name="alert_triangle" size={ICON_SIZES.SM} />
                    </Color>
                  </Tooltip>
                </div>
              )}
            </button>
            {showCheckbox && (
              <button
                className={styles.image__selected}
                onClick={e => {
                  e.preventDefault();
                  onChangeValue(!selected);
                }}
              >
                <Checkbox checked={selected} readOnly />
              </button>
            )}
          </div>
        ) : (
          <span ref={ref}>
            <PlaceholderImage
              alt={alt}
              imageClasses={imageClasses}
              classes={classes}
              tumpStyle={false}
            />
          </span>
        )
      }
    </InView>
  );
}

type GalleryProps = {
  children: React.Node,
  scaleSizeWithScreen?: boolean,
};

Gallery.defaultProps = {
  scaleSizeWithScreen: true,
};

export function Gallery(props: GalleryProps) {
  const classes = ClassNames(styles.gallery, {
    [styles[`gallery--scale-size-with-screen`]]: props.scaleSizeWithScreen,
  });

  return <div className={classes}>{props.children}</div>;
}

type SimpleImageProps = {
  showLoadingIcon?: boolean,
  style: any,
};

export function SimpleImage(props: SimpleImageProps) {
  const { showLoadingIcon, style, ...elementProps } = props;
  return (
    <Img
      {...elementProps}
      style={style}
      loader={showLoadingIcon ? <LoadingSpin /> : <div style={style} />}
      unloader={
        <Row style={style} center>
          <Text muted size={TEXT_SIZE.SIZE_5}>
            Oops... cant find!
          </Text>
        </Row>
      }
    />
  );
}

SimpleImage.defaultProps = {
  showLoadingIcon: true,
};
