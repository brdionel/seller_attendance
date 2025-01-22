import { FaTimes } from "react-icons/fa";

const Modal = (props) => {
  const {
    children,
    customMargin,
    showCloseButton = true,
    handleClose = () => {},
    variant = "default",
  } = props;

  return (
    <div
      className="fixed inset-0 flex cursor-pointer overflow-y-auto backdrop-blur-sm md:items-center md:justify-center"
      style={{
        background: "rgba(0, 0, 0, 0.2)",
        zIndex: 9999,
      }}
    >
      <div
        className={`relative min-h-[45vh] w-full md:w-[45vw] animate-fade-up cursor-auto bg-white ${
          variant === "default"
            ? "md:m-auto md:my-[5vh] md:rounded-[16px]"
            : "rounded-[8px]"
        } xl_custom_4:min-h-0`}
        {...props}
      >
        {showCloseButton && (
          <button
            onClick={handleClose}
            className="absolute right-0 top-0 z-50 m-0 flex h-12 w-12 cursor-pointer items-center justify-center text-secondary-dark outline-none"
          >
            <span className="inline-block text-xl">
              <FaTimes />
            </span>
          </button>
        )}
        <div className="flex flex-col lg:gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
