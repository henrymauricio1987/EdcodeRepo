// Dialog.jsx
import error from './assets/error.svg';
import info from './assets/info.svg';
import success from './assets/success.svg';
import warning from './assets/warning.svg';


// Imagenes según tipo de diálogo
const images = {
    error, info, success, warning
};

// Colores según tipo de diálogo
const colors = {
    error: '#E74C3C',
    info: '#3498DB',
    success: '#2ECC71',
    warning: '#F1C40F',
};

export function Dialog({ children, kind = 'info' }) {
    return (
        <div className="dialog">
            <div className="heading" style={{ backgroundColor: colors[kind] }}>
                <p>{kind.toUpperCase()} dialog</p>

            </div>
            <div className="content">{children}</div> {/* Contenido dinámico */}
            <div className="controls">
                <button>Okay</button>
                <button>Dismiss</button>
            </div>
        </div>
    );
}
