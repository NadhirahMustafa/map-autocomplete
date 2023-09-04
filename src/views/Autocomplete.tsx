import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Geocode from "react-geocode";
import { Select } from "antd";
import { getLocationAutocomplete } from "../services/api.service";
import { setLocationName } from "../redux/actions";
import { getMapInterface } from "../interface/interface";
import { AUTH } from "../constants/apiKey.constant";
import { autocomplete } from "../constants/message.constant";

const Autocomplete: React.FC = () => {
  const dispatch = useDispatch();
  const [, setQuery] = useState("");
  const [places, setPlaces] = useState<getMapInterface>({
    predictions: [],
    status: "",
  });
  
  Geocode.setApiKey(AUTH.API_KEY);

  const onChange = (value: string) => {
    Geocode.fromAddress(value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        dispatch(setLocationName({
          lat: lat,
          lng: lng
        }));
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const onSearch = async (value: string) => {
    setQuery(value);
    let res = await getLocationAutocomplete(value);
    if (res) {
      setPlaces(res);
    } else {
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
      <h1>{autocomplete.title}</h1>
      <Select
        showSearch
        placeholder={autocomplete.placeholder}
        optionFilterProp={autocomplete.optionFilterProp}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={dataList}
        style={{minWidth: `50%`}}
      />
    </div>
  );
};

export default Autocomplete;
