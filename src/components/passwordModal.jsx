import Modal from "./modal";
import PasswordAttendance from "./passwordAttendance";
import Portal from "./portal";

const PasswordAttendanceModal = ({
  handleClose,
  isPasswordValid,
  handleChangePassword,
  inputs,
  handleButtonPasswordClick,
}) => {
  return (
    <Portal>
      <Modal
        variant="attendance"
        handleClose={handleClose}
        style={{
          margin: "5vh auto",
          borderRadius: "16px",
        }}
      >
        <PasswordAttendance
          isPasswordValid={isPasswordValid}
          inputs={inputs}
          handleChange={handleChangePassword}
          handleButtonClick={handleButtonPasswordClick}
        />
      </Modal>
    </Portal>
  );
};

export default PasswordAttendanceModal;
