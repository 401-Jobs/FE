import { useState} from "react";
import { Button , Row } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import GridCard from "./GridCard";
import ListCard from "./ListCard";
const GridListView = () => {
  const [view, setview] = useState(false);
  return (
    <>
      <div
        style={{ textAlign: "right", marginTop: "1rem", marginBottom: "2rem" }}
      >
        {view === true ? (
          <>
            <Button
              size="large"
              onClick={() => setview(false)}
              icon={<UnorderedListOutlined style={{ fontSize: "1.5rem" }} />}
            />
          </>
        ) : (
          <>
            <Button
              size="large"
              onClick={() => setview(true)}
              icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
            />
          </>
        )}
      </div>
      {view === true ? (
        <>
          <Row gutter={[5, 5]}>
            <GridCard />
            <GridCard />
            <GridCard />
          </Row>
        </>
      ) : (
        <>
          <ListCard />
          <ListCard />
          <ListCard />
        </>
      )}
    </>
  );
};

export default GridListView;
