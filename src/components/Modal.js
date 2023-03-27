import {motion} from 'framer-motion';
import Backdrop from './Backdrop';


const Modal = ({hanldeClose, text}) => {

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 50,
                stiffness: 500,
            },
        },
        exit: {
            y: '-100vh',
            opacity: 0,
        },
    };

    return (
        <Backdrop onClick={hanldeClose}>
            <motion.div
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={hanldeClose}>Close</button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;