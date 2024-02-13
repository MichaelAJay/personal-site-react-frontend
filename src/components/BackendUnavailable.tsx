import { Typography } from "antd";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const { Paragraph } = Typography;
const MSG_1 = 'The backend server is currently not reporting back as healthy. Please check this out again at a later time.'


function BackendUnavailable(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <div>
            <Paragraph>{MSG_1}</Paragraph>
            {props.children}
        </div>
    )
}

export default BackendUnavailable;