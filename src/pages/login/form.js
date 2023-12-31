import { Button, Form } from "react-bootstrap";
import { useLogin } from "../../_hooks/login/login.hook";
import { enterKeyHandler } from "../../_utils/keyboard_events";

export default function LoginForm(){

    const hook = useLogin();

    const pressEnter = (e) => {
        enterKeyHandler(e, () => {
            hook.login();
        })
    };

    return(
        <div>
            <div className="vp-label">Usuario</div>
            <Form.Control
                placeholder="Usuario..."
                onKeyUp={pressEnter}
                onChange={(e) => {
                    let ent = {...hook.entity}
                    ent.login = e.target.value;
                    hook.setEntity(ent);
                }}
                value={ hook.entity?.login }
                type="text"
            />
            <div className="vp-label">Contraseña</div>
            <Form.Control
                placeholder="****..."
                onKeyUp={pressEnter}
                onChange={(e) => {
                    let ent = {...hook.entity}
                    ent.password = e.target.value;
                    hook.setEntity(ent);
                }}
                value={ hook.entity?.password }
                type="password"
            />
            <div className="flex-col flex-center" style={{ margin: '20px 0', width: '100%' }}>
            {
                hook.loading ? 
                <div className="vp-spinner"></div>
                :
                <Button onClick={hook.login} style={{ width: '100%' }} variant="primary">Ingresar</Button>
            }
            </div>
        </div>
    );
}