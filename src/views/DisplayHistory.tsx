import React from "react";
import { connect } from "react-redux";
import { Typography, List } from "antd";
import { DisplayHistoryProps } from "../interface/interface";
import { displayHistory } from "../constants/message.constant";
import "../styles/Styles.scss";

const { Title } = Typography;

const DisplayHistory: React.FC<DisplayHistoryProps> = ({ queries }) => {
  return (
    <div className="map--padding">
      <Title level={2}>{displayHistory.title}</Title>
      {queries.length > 0 ? (
        <>
          <List
            size="small"
            bordered
            dataSource={queries.map((query, index) => (
              <p key={index}>{query}</p>
            ))}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </>
      ) : (
        <div>{displayHistory.no_history}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  queries: state.search.queries,
});

export default connect(mapStateToProps)(DisplayHistory);
