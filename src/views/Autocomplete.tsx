import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import Geocode from "react-geocode";
import { Select, Typography } from "antd";
import { getLocationAutocomplete } from "../services/api.service";
import { setLocationName } from "../actions/coordinateActions";
import { StoreDataProps, getMapInterface } from "../interface/interface";
import { autocomplete } from "../constants/message.constant";
import { addSearchResult, storeSearchQuery } from "../actions/storeDataActions";
import "../styles/Styles.scss";

const { Title } = Typography;

const Autocomplete: React.FC<StoreDataProps> = ({
  addSearchResult,
  storeSearchQuery,
}) => {
  const dispatch = useDispatch();
  const [places, setPlaces] = useState<getMapInterface>({
    predictions: [],
    status: "",
  });

  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  const onChange = (value: string) => {
    Geocode.fromAddress(value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        dispatch(
          setLocationName({
            lat: lat,
            lng: lng,
          })
        );
      },
      (error) => {
        console.error(error);
        alert(autocomplete.error_message);
      }
    );
    addSearchResult(value);
    storeSearchQuery(value);
  };

  const onSearch = async (value: string) => {
    try {
      let res = await getLocationAutocomplete(value);
      if (res.status === 'OK') {
        setPlaces(res);
      } else {
        alert(autocomplete.invalid_api_key);
      }
    } catch (err) {
      console.error(err);
      alert(autocomplete.error_message);
    }
  };

  const dataList: any[] = places.predictions.map((x: any, key: number) => {
    return {
      label: x.description,
      value: x.description,
    };
  });

  const filterOption: any = (
    input: string,
    dataList: { label: string; value: string }
  ) => (dataList?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div>
      <Title>{autocomplete.title}</Title>
      <div className="map--padding">
        <Select
          showSearch
          placeholder={autocomplete.placeholder}
          optionFilterProp={autocomplete.optionFilterProp}
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={dataList}
          style={{ minWidth: `30%` }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addSearchResult,
  storeSearchQuery,
};

export default connect(null, mapDispatchToProps)(Autocomplete);
