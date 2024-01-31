import { Card, List, Typography } from "antd";
const { Title, Paragraph } = Typography;

type HomeSkillSectionContentListItem = {
    title: string;
    description: string;
}

export type HomeSkillSectionContentArgs = {
    title: string;
    sectionDescription: string;
    items: Array<HomeSkillSectionContentListItem>
}

function HomeSkillSectionContent(args: HomeSkillSectionContentArgs) {
    return (
        <Card>
            <Title level={2}>{args.title}</Title>
            <Paragraph>{args.sectionDescription}</Paragraph>
            <List
                itemLayout="horizontal"
                dataSource={args.items}
                renderItem={(item: HomeSkillSectionContentListItem) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default HomeSkillSectionContent;