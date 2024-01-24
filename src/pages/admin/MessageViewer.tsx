import { Table } from "antd";
import { useEffect, useState } from "react";
import CustomModal from "../../components/CustomModal";
import { getMessage, getMessages } from "../../services/goServerService";

interface Message {
    id: number;
    name: string;
    email: string;
    created_at: string;
    message: string;
}

type MessageStub = Omit<Message, "message">

type CurrentMessage = {
    "ID": number,
    "CreatedAt": string,
    "UpdatedAt": string,
    "DeletedAt": null,
    "Name": string,
    "Email": string,
    "Message": string,
    "IsRead": boolean
}

function MessageViewer() {
    // const dummyMessages: Array<MessageStub> = [
    //     {
    //         "id": 1,
    //         "name": "Michael Jay",
    //         "email": "michael.a.jay82@gmail.com",
    //         "created_at": "2024-01-20T22:06:20.841049-05:00"
    //     }
    // ]

    // const dummyTargetMessage: Message = {
    //     "id": 1,
    //     "name": "Michael Jay",
    //     "email": "michael.a.jay82@gmail.com",
    //     "created_at": "2024-01-20T22:06:20.841049-05:00",
    //     "message": "Here is the target message content"
    // }

    const [data, setData] = useState<Array<MessageStub>>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Message | null>(null);

    // Hooks
    useEffect(() => {
        setMessages()
    }, [])

    const selectMessage = async (record: MessageStub) => {
        try {
            const message: CurrentMessage = await getMessage({ id: record.id })
            const convertedMessage: Message = {
                id: message.ID,
                name: message.Name,
                email: message.Email,
                created_at: message.CreatedAt,
                message: message.Message
            }
            setSelectedItem(convertedMessage);
            setIsModalVisible(true);
        } catch (err) {
            console.error('ARGH', err);
        }
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    const setMessages = async () => {
        try {
            // Will need to handle selecting the read ones
            const data = await getMessages({});
            setData(data);
        } catch (err) {
            console.error(err);
        }
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text: any) => new Date(text).toLocaleString()
        }
    ]

    return (
        <>
            <Table
                dataSource={data}
                columns={columns}
                onRow={(record) => {
                    return {
                        onClick: () => selectMessage(record)
                    }
                }}
            />
            <CustomModal
                title="Details"
                visible={isModalVisible}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
            >
                {selectedItem && (
                    <div>
                        <p>Name: {selectedItem.name}</p>
                        <p>Email: {selectedItem.email}</p>
                        <p>Message: {selectedItem.message}</p>
                    </div>
                )}
            </CustomModal>
        </>
    )
}

export default MessageViewer;