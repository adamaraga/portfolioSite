import closeIcon from "../asset/images/svg/times.svg";
import { useEffect, useState } from "react";

const Modal = ({
  children,
  width,
  title,
  setOpenModal,
  openModal,
  // close,
}) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (openModal) {
      setOpened(true);
    }
  }, [openModal]);

  return (
    <div className="modal">
      <div
        className={
          openModal
            ? "modal__con open"
            : opened
            ? "modal__con open close"
            : "modal__con"
        }
      >
        <div className="modal__background">
          <div
            style={{ maxWidth: width ? width : 800 }}
            className="modal__contentCon"
          >
            <div
              className="modal__content__btnCon"
              onClick={() => setOpenModal(false)}
            >
              <img src={closeIcon} alt="" />
            </div>
            <div className="modal__content">
              <div className="modal__content__main">
                <h3>{title}</h3>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
