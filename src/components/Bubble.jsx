import useElementAnimation from '../hooks/useElementAnimation';
import styles from './css/bubble.module.css';

function Bubble({props}){
    const [container_ref, animation_class] = useElementAnimation(props.section);

    if(animation_class === "animated"){
        setTimeout(() => {
            try{
                container_ref.current.classList.add(styles.animated);
            }
            catch(e){
                return;
            }
        }, Math.floor(Math.floor(Math.random() * 1200)) + 2600);
    }

    return(
        <div className={styles.bubble + " " + (animation_class === "fastLoaded" ? styles.fastLoaded : "")} ref={container_ref}
            style={{
                width: props.width, 
                height: props.width, 
                background: `linear-gradient(135deg, rgba(255,255,255,1) -50%, ${props.color} 100%)`, 
                top: props.top, 
                left: props.left,
                right: props.right,
                bottom: props.bottom
            }}>
        </div>
    )
}

export default Bubble;