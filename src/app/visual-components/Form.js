// @flow
import React, { useContext, createContext, Fragment } from 'react';
import type { Node } from 'react';
import ClassNames from 'classnames';
import getMeFormData from 'getmeformdata';

import { COLOR_SHADES } from './Color';
import ErrorBoundary from './Error';
import styles from './form.css';
import Space, { Col } from './Grid';
import Icon, { ICON_SIZES } from './Icons';
import Text from './Text';

type FormProps = {
  children: Node,
  onSubmit: Function,
  errors?: {},
};

const FormContext = createContext({ errors: {} });
export default function Form(props: FormProps) {
  const { children, onSubmit, errors, ...elementProps } = props;
  function handleOnSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = getMeFormData(e.target, {});
    onSubmit(formData, e);
  }

  return (
    <form {...elementProps} onSubmit={handleOnSubmit}>
      <FormContext.Provider value={errors}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </FormContext.Provider>
    </form>
  );
}

Form.defaultProps = {
  errors: {},
};

type FormGroupProps = {
  children: Node,
  error?: { message: string } | null,
};

FormGroup.defaultProps = {
  error: null,
};

export function FormGroup(props: FormGroupProps) {
  const { children, error } = props;
  const classes = ClassNames(styles['form-group'], {
    [styles['form-group--error']]: !!error,
  });

  return (
    <div className={classes}>
      {children}
      {error && (
        <div>
          <Space vertical size={2} />
          <FormError>{error.message}</FormError>
        </div>
      )}
    </div>
  );
}

type FormErrorProps = {
  children: Node,
};

export function FormError(props: FormErrorProps) {
  const { children } = props;
  return (
    <Text block color={COLOR_SHADES.DANGER}>
      {children}
    </Text>
  );
}

type FormFooterProps = {
  children: Node,
};

export function FormFooter(props: FormFooterProps) {
  const { children } = props;
  const classes = ClassNames(styles['form-footer']);

  return (
    <Col size={12} className={classes} rightAlighed>
      {children}
    </Col>
  );
}

type InputProps = {
  className?: string | void,
  name: string,
};

Input.defaultProps = {
  className: '',
};

export function Input(props: InputProps) {
  const { className = '', name, ...elementProps } = props;
  const errors = useContext(FormContext);

  const classes = ClassNames(styles.input, className);

  return (
    <Fragment>
      <input className={classes} name={name} {...elementProps} />
      {errors && errors[name] && <FormError>{errors[name]}</FormError>}
    </Fragment>
  );
}

type TextareaProps = {
  className?: string | void,
};

Textarea.defaultProps = {
  className: '',
};

export function Textarea(props: TextareaProps) {
  const { className = '', ...elementProps } = props;

  const classes = ClassNames(styles.input, className);

  return <textarea className={classes} {...elementProps} />;
}

type CheckboxProps = {
  checked?: boolean,
};

Checkbox.defaultProps = {
  checked: false,
};

export function Checkbox(props: CheckboxProps) {
  return (
    <span
      className={ClassNames(styles.checkbox, {
        [styles['checkbox--checked']]: props.checked,
      })}
    >
      <input type="checkbox" {...props} tabIndex={-1} />
      <span className={styles.checkbox__icon}>
        <Icon name="check" size={ICON_SIZES.SM} />
      </span>
    </span>
  );
}

type ToggleSwitchProps = {
  checked: boolean,
  onChange: (checked: boolean) => any,
  disabled: boolean,
};

export function ToggleSwitch(props: ToggleSwitchProps) {
  const { onChange, checked, ...elementProps } = props;
  return (
    <div
      className={ClassNames(styles['toggle-switch'], {
        [styles['toggle-switch--disabled']]: elementProps.disabled,
      })}
    >
      <input
        type="checkbox"
        className={styles['toggle-switch__input']}
        onChange={() => onChange(!checked)}
        {...elementProps}
      />
      <span className={styles['toggle-switch__well']} />
      <span
        className={ClassNames(styles['toggle-switch__thumb'], {
          [styles['toggle-switch__thumb--right']]: checked,
        })}
      />
    </div>
  );
}
