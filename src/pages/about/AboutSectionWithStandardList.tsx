import { List, Typography } from 'antd';
const { Title } = Typography;

type AboutSectionWithStandardListProps = {
  level: 1 | 2 | 3 | 4 | 5;
  title: string;
  dataSource: Array<any>;
};

function AboutSectionWithStandardList({
  level,
  title,
  dataSource,
}: AboutSectionWithStandardListProps) {
  return (
    <div>
      <Title level={level}>{title}</Title>
      <List
        size="small"
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item style={{ borderBottom: 0 }}>
            <List.Item.Meta description={item} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default AboutSectionWithStandardList;
