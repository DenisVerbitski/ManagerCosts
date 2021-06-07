import { ReactElement } from "react";
import moment from "moment";
import { Store } from "rc-field-form/lib/interface";
import { Form, Modal, Button, Input, InputNumber } from "antd";
import { DatePicker } from "antd";

import ModalElement from "./interfaces/ModalElement";

import styles from "./ModalWindow.less";
import ModalFieldType from "./interfaces/ModalFieldType";

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

  const disabledDate = (current: any) => {
    return current && current > moment().endOf("day");
  };

  const createInput = (field: ModalElement) => {
    const { label, name, placeholder, dataType, defaultFocus, key } = field;

    return (
      <Form.Item
        key={key}
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
    const { label, name, placeholder, dataType, defaultFocus, key } = field;

    return (
      <Form.Item
        key={key}
        name={name}
        rules={[
          {
            required: true,
            message: label,
          },
        ]}
      >
        <InputNumber
          className={styles.inputNumber}
          autoFocus={defaultFocus}
          type={dataType}
          placeholder={placeholder}
          min={0}
        />
      </Form.Item>
    );
  };

  const createDatePicker = (field: ModalElement) => {
    const { name, label, placeholder, defaultFocus, key } = field;
    initialValues[name] = moment();
    return (
      <Form.Item
        key={key}
        name={name}
        rules={[
          {
            required: true,
            message: label,
          },
        ]}
      >
        <DatePicker
          disabledDate={disabledDate}
          autoFocus={defaultFocus}
          className={styles.date}
          placeholder={placeholder}
          format="DD/MM/YYYY"
        />
      </Form.Item>
    );
  };

  const fieldTypeMap = new Map<
    ModalFieldType,
    (field: ModalElement) => ReactElement
  >([
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
        {fields.map((field, fieldIndex) => {
          const fieldCreator = fieldTypeMap.get(field.type);

          field.key = fieldIndex;
          if (!fieldIndex) {
            field.defaultFocus = true;
          }

          return fieldCreator && fieldCreator(field);
        })}
        <Form.Item>
          <Button
            className={styles.okButton}
            type="primary"
            htmlType="submit"
            onClick={onHideModal}
          >
            Oк
          </Button>
          <Button
            className={styles.cancelButton}
            htmlType="button"
            onClick={onHideModal}
          >
            Отмена
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
