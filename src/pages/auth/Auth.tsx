import { Flex } from "antd";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import './Auth.css';

function Auth(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <Flex justify={'center'}>
            <div className="auth-container">
                {props.children}
            </div>
        </Flex>
    )
}

export default Auth;