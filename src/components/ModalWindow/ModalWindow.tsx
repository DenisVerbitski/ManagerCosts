import { ReactElement } from "react";
import moment from "moment";
import { Form, Modal, Button, Input } from "antd";
import { DatePicker } from "antd";
import styles from "./ModalWindow.less";
import { ModalElement } from "./ModalElement";

interface ModalWindowProps {
  title: string;
  isVisible: boolean;
  fields: ModalElement[];
  onFinish?: (values: any) => void;
  onClose?: () => void;
}

export const ModalWindow = (props: ModalWindowProps) => {
  const createInput = (
    name: string,
    label: string,
    placeholder: string,
    dataType: string,
    defaultFocus: boolean
  ) => {
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
          {...(defaultFocus ? { ref: (ref) => ref?.focus() } : {})}
          type={dataType}
          placeholder={placeholder}
        />
      </Form.Item>
    );
  };

  const createDatePicker = (
    name: string,
    label: string,
    placeholder: string
  ) => {
    return (
      <Form.Item
        name={name}
        initialValue={moment()}
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
          format="MM/DD/YYYY"
        />
      </Form.Item>
    );
  };

  const createFields = (): ReactElement[] => {
    const fields: ReactElement[] = props.fields.map((field, fieldIndex) => {
      const { label, name, placeholder, type, dataType } = field;
      if (type === "input" && dataType) {
        let defaultFocus: boolean = false;
        if (fieldIndex === 0) {
          defaultFocus = true;
        }
        return createInput(
          name,
          label,
          placeholder,
          dataType,
          defaultFocus
        );
      }
      return createDatePicker(name, label, placeholder);
    });

    return fields;
  };

  return (
    <Modal
      className={styles.ItemModalStyles}
      onOk={props.onClose}
      onCancel={props.onClose}
      destroyOnClose={true}
      visible={props.isVisible}
      footer={false}
      title="Введите данных о расходах"
    >
      <Form onFinish={props.onFinish}>
        {createFields()}
        <Form.Item>
          <Button
            className={styles.okButton}
            type="primary"
            htmlType="submit"
            onClick={props.onClose}
          >
            Ok
          </Button>
          <Button
            className={styles.cancelButton}
            htmlType="button"
            onClick={props.onClose}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
