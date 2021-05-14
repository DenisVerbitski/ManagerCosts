import React, { ReactElement } from "react";
import moment from "moment";
import { Store } from "rc-field-form/lib/interface";
import { Form, Modal, Button, Input, InputNumber } from "antd";
import { DatePicker } from "antd";

import ModalElement from "./interfaces/ModalElement";

import styles from "./ModalWindow.less";

interface ModalWindowProps {
  title: string;
  isVisible: boolean;
  fields: ModalElement[];
  onFinish?: (values: any) => void;
  onHideModal?: () => void;
}

export const ModalWindow = (props: ModalWindowProps) => {
  const { fields, isVisible, title, onFinish, onHideModal } = props;
  let initialValues: Store = {};

  const createInput = (field: ModalElement) => {
    const { label, name, placeholder, dataType, defaultFocus } = field;

    return (
      <Form.Item
        name={name}
        rules={[
          {
            required: true,
            message: label,
          },
        ]}
      >
        <Input
          autoFocus={defaultFocus}
          type={dataType}
          placeholder={placeholder}
        />
      </Form.Item>
    );
  };

  const createInputNumber = (field: ModalElement) => {
    const { label, name, placeholder, dataType, defaultFocus } = field;

    return (
      <Form.Item
        name={name}
        rules={[
          {
            required: true,
            message: label,
          },
        ]}
      >
        <InputNumber
          autoFocus={defaultFocus}
          type={dataType}
          placeholder={placeholder}
          min={0}
        />
      </Form.Item>
    );
  };

  const createDatePicker = (field: ModalElement) => {
    const { name, label, placeholder, defaultFocus } = field;
    initialValues[name] = moment();
    return (
      <Form.Item
        name={name}
        rules={[
          {
            required: true,
            message: label,
          },
        ]}
      >
        <DatePicker
          autoFocus={defaultFocus}
          className={styles.date}
          placeholder={placeholder}
          format="DD/MM/YYYY"
        />
      </Form.Item>
    );
  };

  const createFields = (): ReactElement[] => {
    const modalFields: ReactElement[] = [];
    fields.forEach((field, fieldIndex) => {
      const fieldCreator = fieldTypeMap.get(field.type);

      if (!fieldIndex) {
        field.defaultFocus = true;
      }

      if (fieldCreator) {
        modalFields.push(fieldCreator(field));
      }
    });

    return modalFields;
  };

  const fieldTypeMap = new Map([
    ["input", createInput],
    ["inputNumber", createInputNumber],
    ["datePicker", createDatePicker],
  ]);

  return (
    <Modal
      className={styles.ItemModalStyles}
      onOk={onHideModal}
      onCancel={onHideModal}
      destroyOnClose={true}
      visible={isVisible}
      footer={false}
      title={title}
    >
      <Form onFinish={onFinish} initialValues={initialValues}>
        {createFields()}
        <Form.Item>
          <Button
            className={styles.okButton}
            type="primary"
            htmlType="submit"
            onClick={onHideModal}
          >
            Ok
          </Button>
          <Button
            className={styles.cancelButton}
            htmlType="button"
            onClick={onHideModal}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
