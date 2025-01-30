import { useEffect, useState } from "react";
import Portal from "./portal";
import Modal from "./modal";
import ClosingAttendance from "./clossingAttendance";

const ClosingAttendanceModal = ({
  handleClose,
  onSubmit,
  allQuestions,
  handleQuestionSelected,
  loaderQuestions = false,
  loadingCloseAttendance = false,
  titleQuestion,
  showCloseButton,
  onClose,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Portal>
      <Modal
        variant="attendance"
        handleClose={handleClose}
        showCloseButton={false}
        style={{
          minHeight: "570px",
          minWidth: isMobile ? "100%" : "685px",
          margin: isMobile ? "0" : "5vh auto",
          borderRadius: "16px",
        }}
      >
        <ClosingAttendance
          onSubmit={onSubmit}
          allQuestions={allQuestions}
          handleQuestionSelected={handleQuestionSelected}
          loaderQuestions={loaderQuestions}
          loadingCloseAttendance={loadingCloseAttendance}
          titleQuestion={titleQuestion}
          showCloseButton={showCloseButton}
          onClose={onClose}
        />
      </Modal>
    </Portal>
  );
};

export default ClosingAttendanceModal;
