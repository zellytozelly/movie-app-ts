import { PropsWithChildren, MouseEvent } from 'react'
import styles from './modal.module.scss'

interface ModalDefaultType {
  onClickToggleModal: () => void
}

const Modal = ({ onClickToggleModal, children }: PropsWithChildren<ModalDefaultType>) => {
  const handleModalBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (onClickToggleModal) {
      onClickToggleModal()
    }
  }

  return (
    <div className={styles.modalContainer}>
      <dialog className={styles.dialogBox}>{children}</dialog>
      <button type='button' aria-label='modal' className={styles.backDrop} onClick={handleModalBtnClick} />
    </div>
  )
}

export default Modal
