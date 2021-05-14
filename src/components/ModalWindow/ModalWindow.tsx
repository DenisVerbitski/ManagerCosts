import { ReactElement } from "react";
import moment from "moment";
import { Store } from "rc-field-form/lib/interface";
import { Form, Modal, Button, Input } from "antd";
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

  const createDatePicker = (field: ModalElement) => {
    const { name, label, placeholder } = field;
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
          className={styles.date}
          placeholder={placeholder}
          format="DD/MM/YYYY"
        />
      </Form.Item>
    );
  };

  const createFields = (): ReactElement[] => {
    const modalFields: ReactElement[] = [];
    props.fields.forEach((field, fieldIndex) => {
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
    ["datePicker", createDatePicker],
  ]);

  return (
    <Modal
      className={styles.ItemModalStyles}
      onOk={props.onHideModal}
      onCancel={props.onHideModal}
      destroyOnClose={true}
      visible={props.isVisible}
      footer={false}
      title="Введите данных о расходах"
    >
      <Form onFinish={props.onFinish} initialValues={initialValues}>
        {createFields()}
        <Form.Item>
          <Button
            className={styles.okButton}
            type="primary"
            htmlType="submit"
            onClick={props.onHideModal}
          >
            Ok
          </Button>
          <Button
            className={styles.cancelButton}
            htmlType="button"
            onClick={props.onHideModal}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
